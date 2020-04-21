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

  function introduceBreak(introduce) {
    if (introduce.length > 155) {
      return introduce.slice(0, 150) + ' ...';
    } else {
      return introduce;
    }
  }

  return(
    <div>
      <Head>
        <title>List</title>
      </Head>
      <Header />

      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={12}>
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
                <div className="list-box clearfix">
                  <div className="list-title">
                    <Link href={{pathname: '/detailed', query:{id:item.id}}}>
                      <a>{item.title}</a>
                    </Link>
                  </div>
                  <div className="list-icon">
                    <div><CalendarOutlined />{item.addTime}</div>
                    <div><FolderOutlined />{item.typeName}</div>
                    <div><FireOutlined />{item.viewCount}人</div>
                  </div>
                  <div className="list-image">
                    <Link href={{pathname:'/detailed', query:{id:item.id}}}>
                      <a href="#">
                        <img src={item.image} />
                      </a>
                    </Link>
                  </div>
                  <span className="list-introduce">
                    {introduceBreak(item.introduce)}
                  </span>
                </div>
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