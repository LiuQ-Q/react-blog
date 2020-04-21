import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Row, Col, List, Breadcrumb } from 'antd';
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons';

import '../public/style/pages/index.css';

import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import MdResolve from '../components/MdResolve';

import api from '../config/apiUrl';

const Home = (list) => {
  const [myList, setMyList] = useState(list.data);

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
        <title>Home</title>
      </Head>
      <Header />

      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={12}>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <List 
            itemLayout="vertical"
            dataSource={myList}
            renderItem={item => (
              <List.Item>
                <div className="list-box clearfix">
                  <div className="list-title">
                    <Link href={{pathname:'/detailed', query:{id:item.id}}}>
                      <a>{item.title}</a>
                    </Link>
                  </div>
                  <div className="list-icon">
                    <div><CalendarOutlined />{item.addTime}</div>
                    <div><FolderOutlined />{item.typeName}</div>
                    <div><FireOutlined />{item.viewCount}</div>
                  </div>
                  <div className="list-image">
                    <Link href={{pathname:'/detailed', query:{id:item.id}}}>
                      <a>
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

Home.getInitialProps = () => {
  return api.getArticleList();
}

export default Home;