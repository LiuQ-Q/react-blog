import React from 'react';
import { Avatar, Divider } from 'antd';
import '../public/style/components/author.css';
import { GithubOutlined } from '@ant-design/icons';

const Author = () => {
  return(
    <div className="author-div comm-box">
      <div>
        <Avatar size={100} src='../static/avatar.jpg' />
        <div className="author-introduction">
          前端程序员
          <Divider>社交账号</Divider>
          <Avatar size={28} className="account" icon={<GithubOutlined />} />
          <Avatar size={28} className="account" icon={<GithubOutlined />} />
          <Avatar size={28} className="account" icon={<GithubOutlined />} />
        </div>
      </div>
    </div>
  )
}

export default Author;