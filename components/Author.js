import React, { useState } from 'react';
import { Avatar, Divider } from 'antd';
import '../public/style/components/author.css';
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';

const Author = () => {
  const [qqStatus, setQqStatus] = useState('none');
  const [weChatStatus, setWeChatStatus] = useState('none');

  const changeQqStatus = (status) => {
    setQqStatus(status);
  }

  const changeWeChatStatus = (status) => {
    setWeChatStatus(status);
  }

  return(
    <div className="author-div comm-box">
      <div>
        <Avatar size={100} src='../static/avatar.jpg' />
        <div className="author-introduction">
          此博客前端使用 Next + Antd Design 构建, 目前还未全部完成, 仍在优化中, 项目后端使用 egg + mysql 构建, 项目目前运行在腾讯云, 使用 Nginx + pm2, 如对博客感兴趣, 可进入下方 github 拉取
          <Divider>社交账号</Divider>
          <a
            href="https://github.com/LiuQ-Q"
            target="_blank"
          >
            <Avatar
              size={28}
              className="account account-github"
              icon={<GithubOutlined />}
            />
          </a>
          <Avatar
            size={28}
            className="account account-qq"
            icon={<QqOutlined />}
            onMouseEnter={()=>{changeQqStatus('block')}}
            onMouseLeave={()=>{changeQqStatus('none')}}
          />
          <Avatar
            size={28}
            className="account account-wechat"
            icon={<WechatOutlined />}
            onMouseEnter={()=>{changeWeChatStatus('block')}}
            onMouseLeave={()=>{changeWeChatStatus('none')}}
          />
          <img
            src="../static/qq.jpg"
            className="status-img"
            style={{display: qqStatus}}
          />
          <img
            src="../static/wechat.jpg"
            className="status-img"
            style={{display: weChatStatus}}
          />
        </div>
      </div>
    </div>
  )
}

export default Author;