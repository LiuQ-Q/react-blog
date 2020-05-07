import React, { useState, useEffect } from 'react';
import '../public/style/components/header.css';
import Router from 'next/router';
import Link from 'next/router';
import api from '../config/apiUrl';

import { Row, Col, Menu } from 'antd';
import { HomeOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';

const Header = () => {
  const [navList, setNavList] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const result = await api.getTypeInfo();
      setNavList(result);
    }

    fetchData();
  }, []);

  const handleClick = (e) => {
    if (e.key == 0) {
      Router.push('/');
    } else if (e.key === "about") {
      window.open("http://resume.liu7.xyz");
    } else {
      Router.push('/list?id=' + e.key);
    }
  };

  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={10}>
          <span className="header-logo">
            <a href="http://resume.liu7.xyz" target="_blank">LiuQ-Q</a>
          </span>
          <span className="header-text">不思，故有惑；不求，故不得；不问，故不知。</span>
        </Col>
        {/* <Col xs={0} sm={0} md={14} lg={8} xl={6}>
        </Col> */}
        <Col xs={0} sm={0} md={14} lg={8} xl={5}>
          <Menu mode="horizontal" onClick={handleClick}>
            <Menu.Item key="about">
              <UserOutlined />
              简历
            </Menu.Item>
            <Menu.Item key="0">
              <HomeOutlined />
              首页
            </Menu.Item>
            {
              navList.map((nav) => {
                return (
                  <Menu.Item key={nav.id}>
                    <UnorderedListOutlined />
                    { nav.name }
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header;