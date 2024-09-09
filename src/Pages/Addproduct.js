import { React, useState } from 'react';
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

const Addproduct = () => {
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
        <h3 className="mb-4 title">Add Product</h3>
        <div>
            <form onSubmit={handleSubmit}>
                <CustomInput type="text" label="Enter Product Title" />
                <div className="editor-container mb-3" style={{ border: '1px solid #ccc', minHeight: '100px', padding: '10px' }}>
                    <button type="button" onClick={handleBoldClick}>Bold</button>
                    <Editor 
                        editorState={editorState} 
                        onChange={handleEditorChange} 
                        placeholder="Write your blog here..."
                    />
                </div>
                <CustomInput type="number" label="Enter Product Price" />
                <select name="" className="form-control py-3 mb-3" id="">
                    <option value="">Select Brand</option>
                </select>
                <select name="" className="form-control py-3 mb-3" id="">
                    <option value="">Select Category</option>
                </select>
                <select name="" className="form-control py-3 mb-3" id="">
                    <option value="">Select Color</option>
                </select>
                <CustomInput type="number" label="Enter Product Quantity" />
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
                <button
                    type="submit"
                    className="btn btn-success border-0 rounded-3 my-5"
                >
                    Add Product
                </button>
            </form>
        </div>
    </div>
  );
};

export default Addproduct;