/* import React, { useState, useEffect, useRef } from 'react';
import CustomInput from '../Components/CustomInput';
import { Stepper } from 'react-form-stepper';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Addblog = () => {
    const [desc, setDesc] = useState('');

    const handleDesc = (e) => {
        setDesc(e);
    };

    return (
        <div>
            <h3 className="mb-4">Add Blog</h3>
            <Stepper
                steps={[{ label: 'Add Blog Details' }, { label: 'Upload Images' }, { label: 'Finish' }]}
                activeStep={1}
            />
            <div>
                <form action="">
                    <CustomInput type="text" label="Enter Blog Title" />
                    <select name="" className="form-control py-3 mb-3" id="">
                        <option value="">Select Category</option>
                    </select>
                    <ReactQuill
                        value={desc}
                        onChange={handleDesc}
                    />
                    <button
                        type="submit"
                        className="btn btn-success border-0 rounded-3 my-5"
                    >
                        Add Blog
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Addblog;
 */

import React, { useState } from 'react';
import CustomInput from '../Components/CustomInput';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';

import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

const Addblog = () => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    const handleEditorChange = (newEditorState) => {
        setEditorState(newEditorState);
    };

    const handleBoldClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Convert editor content to raw string or JSON for submission
        const contentState = editorState.getCurrentContent();
        const rawContent = JSON.stringify(convertToRaw(contentState));
        console.log(rawContent);
    };

    return (
        <div>
            <h3 className="mb-4 title">Add Blog</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                        banned files.
                        </p>
                    </Dragger>
                    <div className="mt-4">
                        <CustomInput type="text" label="Enter Blog Title" />
                    </div>
                    <select name="" className="form-control py-3 mb-3" id="">
                        <option value="">Select Category</option>
                    </select>
                    {/* Draft.js Editor */}
                    <div className="editor-container" style={{ border: '1px solid #ccc', minHeight: '200px', padding: '10px' }}>
                        <button type="button" onClick={handleBoldClick}>Bold</button>
                        <Editor 
                            editorState={editorState} 
                            onChange={handleEditorChange} 
                            placeholder="Write your blog here..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-success border-0 rounded-3 my-5"
                    >
                        Add Blog
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Addblog;
