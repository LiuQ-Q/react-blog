import React, { useEffect } from 'react';
import Head from 'next/head';
import { Row, Col, Breadcrumb } from 'antd';
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons';

import '../public/style/pages/detailed.css';
import '../public/style/pages/markdown.css';
import 'highlight.js/styles/monokai-sublime.css';

import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import MdResolve from '../components/MdResolve';

import api from '../config/apiUrl';

const Detailed = (article) => {
  const { md, tocify } = MdResolve(article.articleContent);

  useEffect(() => {
    let articleInfo = {
      id: article.id,
      view_count: article.viewCount + 1
    }
    
    api.updateArticle(articleInfo).then((res) => {
      if (res.isSuccess) {
        // console.log('修改成功');
      } else {
        // console.log('修改失败');
      }
    })
  }, [])

  return (
    <div>
      <Head>
        <title>{ article.title }-LiuQ-Q个人博客</title>
      </Head>
      <Header />
  
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={10}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/">首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href={"/list?id=" + article.typeId}>{article.typeName}</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>内容</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className="detailed-title">
                { article.title }
              </div>
              <div className="list-icon center">
                <div><CalendarOutlined />{article.addTime}</div>
                <div><FolderOutlined />{article.typeName}</div>
                <div><FireOutlined />{article.viewCount + 1}</div>
              </div>
              <div
                className="detailed-content markdown-body"
                dangerouslySetInnerHTML={{__html: md}}
              ></div>
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <div className="detailed-nav comm-box">
            <div className="nav-title">文章目录</div>
            { tocify && tocify.render() }
          </div>
        </Col>
      </Row>
  
      <Footer />
    </div>
  )
}

Detailed.getInitialProps = (context) => {
  return api.getArticleById(context.query.id);
}

export default Detailed;