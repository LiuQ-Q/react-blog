import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card } from 'antd';

import '../public/style/components/hot.css';

import api from '../config/apiUrl';

const Hot = () => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    api.getArticleList().then(res => {
      let articleList = res.data;

      articleList.sort((a, b) => {
        return b.viewCount - a.viewCount;
      })

      if (articleList.length < 5) {
        setArticleList(articleList);
      } else {
        setArticleList(articleList.slice(0, 5));
      }
    });
  }, []);

  return (
    <div className="hot-div comm-box">
      <Card size="small" title="猜你喜欢" bordered={false}>
        {
          articleList.map((article) => {
            return (
              <p className="hot-article-title" key={article.id+article.title}>
                <Link href={{pathname:'/detailed', query:{id:article.id}}}>
                  <a>{article.title}</a>
                </Link>
              </p>
            )
          })
        }
      </Card>
    </div>
  )
}

export default Hot;