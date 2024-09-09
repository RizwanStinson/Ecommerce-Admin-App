import React from 'react';
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from '@ant-design/plots';

import { Table } from 'antd';
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

const Dashboard = () => {
  const data = [
    { type: 'Jan', value: 10 },
    { type: 'Feb', value: 20 },
    { type: 'Mar', value: 30 },
    { type: 'Apr', value: 90 },
    { type: 'May', value: 50 },
    { type: 'Jun', value: 60 },
    { type: 'Jul', value: 70 },
    { type: 'Aug', value: 80 },
    { type: 'Sep', value: 90 },
    { type: 'Oct', value: 100 },
    { type: 'Nov', value: 110 },
    { type: 'Dec', value: 80 },
  ];
  
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    color: ({ type }) => {
      return '#ffd333';
    },
    label: {
      position: 'top', // changed from 'middle' to 'top'
      style: {
        fill: '#FFFFFF',
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: { alias: 'Month' },
      value: { alias: 'Income' },
    },
  };
  
  return (
    <div>
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green"><BsArrowUpRight /> 32%</h6>
            <p className="mb-0 desc">Compared To April 2022</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="red"><BsArrowDownRight /> 32%</h6>
            <p className="mb-0 desc">Compared To April 2022</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="red"><BsArrowDownRight /> 32%</h6>
            <p className="mb-0 desc">Compared To April 2022</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">Income Statics</h3>
        <div>
          <Column {...config} />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">Customer List</h3>
          <div>
              <Table columns={columns} dataSource={dataSource} />
          </div>
      </div>
    </div>
  );
};

export default Dashboard;