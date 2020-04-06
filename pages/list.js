import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Row, Col, List, Breadcrumb } from 'antd';
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons';

import '../public/style/pages/list.css';

import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import MdResolve from '../components/MdResolve';

import api from '../config/apiUrl';

const MyList = (list) => {
  const [myList, setMyList] = useState(list.data);

  useEffect(() => {
    setMyList(list.data);
  });

  return(
    <div>
      <Head>
        <title>List</title>
      </Head>
      <Header />

      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item>列表</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <List 
            itemLayout="vertical"
            dataSource={myList}
            renderItem={item => (
              <List.Item>
                <div className="list-title">
                  <Link href={{pathname: '/detailed', query:{id:item.id}}}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <span><CalendarOutlined />{item.addTime}</span>
                  <span><FolderOutlined />{item.typeName}</span>
                  <span><FireOutlined />{item.viewCount}人</span>
                </div>
                <div 
                  className="list-introduce"
                  dangerouslySetInnerHTML={{__html: MdResolve(item.introduce).md}}
                ></div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>

      <Footer />
    </div>
  )
}

MyList.getInitialProps = (context) => {
  return api.getArticleListByTypeId(context.query.id);
}

export default MyList;