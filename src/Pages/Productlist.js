import React from 'react';
import { Table } from 'antd';
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];
const dataSource = Array.from({
  length: 46,
}).map((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  product: 32,
  status: `London, Park Lane no. ${i}`,
}));

const Productlist = () => {
  return (
    <div>
        <h3 className="mb-4 title">Products</h3>
        <div>
            <Table columns={columns} dataSource={dataSource} />
        </div>
    </div>
  );
};

export default Productlist;