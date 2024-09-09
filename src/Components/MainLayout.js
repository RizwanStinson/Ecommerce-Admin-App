import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineDashboard, AiOutlineBgColors } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { FaClipboardList, FaBloggerB, FaGalacticSenate } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { ImBlog } from "react-icons/im";
import { SiBrandfolder } from "react-icons/si";
import { Button, Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">ECom</span>
            <span className="lg-logo">ECommerce</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({ key }) => {
            if(key === "signout"){
              console.log("Sign out");
            }
            else {
              navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className="fs-5" />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <FiUser className="fs-5" />,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <BsCart2 className="fs-5" />,
              label: 'Catalog',
              children: [
                {
                  key: 'product',
                  icon: <BsCart2 className="fs-5" />,
                  label: 'Add Product',
                },
                {
                  key: 'list-product',
                  icon: <BsCart2 className="fs-5" />,
                  label: 'Product List',
                },
                {
                  key: 'brand',
                  icon: <SiBrandfolder className="fs-5" />,
                  label: 'Brand',
                },
                {
                  key: 'list-brand',
                  icon: <SiBrandfolder className="fs-5" />,
                  label: 'Brand List',
                },
                {
                  key: 'category',
                  icon: <BiCategory className="fs-5" />,
                  label: 'Category',
                },
                {
                  key: 'list-category',
                  icon: <BiCategory className="fs-5" />,
                  label: 'Category List',
                },
                {
                  key: 'color',
                  icon: <AiOutlineBgColors className="fs-5" />,
                  label: 'Color',
                },
                {
                  key: 'list-color',
                  icon: <AiOutlineBgColors className="fs-5" />,
                  label: 'Color List',
                },
              ],
            },
            {
              key: 'orders',
              icon: <FaClipboardList className="fs-5" />,
              label: 'Orders',
            },
            {
              key: 'blogs',
              icon: <FaBloggerB className="fs-5" />,
              label: 'Blogs',
              children: [
                {
                  key: 'blog',
                  icon: <ImBlog className="fs-5" />,
                  label: 'Add Blog',
                },
                {
                  key: 'blog-list',
                  icon: <FaBloggerB className="fs-5" />,
                  label: 'Blog List',
                },
                {
                  key: 'blog-category',
                  icon: <ImBlog className="fs-5" />,
                  label: 'Add Blog Category',
                },
                {
                  key: 'blog-category-list',
                  icon: <FaBloggerB className="fs-5" />,
                  label: 'Blog Category List',
                },
              ],
            },
            {
              key: 'enquiries',
              icon: <FaGalacticSenate className="fs-5" />,
              label: 'Enquiries',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="position-absolute badge bg-warning rounded-circle p-1">
                5
              </span>
            </div>
            <div className="d-flex gap-2 align-items-center dropdown">
              <div>
                <img width={32} height={32} src="https://devs-ecom.netlify.app/images/main-banner-1.jpg" alt="user" />
              </div>
              <div role="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <h5 className="mb-0">Shuvo</h5>
                <p className="mb-0">shuvo83qn@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><Link className="dropdown-item py-1 mb-1" style={{height: "auto", lineHeight: "20px"}} href="#">View Profile</Link></li>
                <li><Link className="dropdown-item py-1 mb-1" style={{height: "auto", lineHeight: "20px"}} href="#">Signout</Link></li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;