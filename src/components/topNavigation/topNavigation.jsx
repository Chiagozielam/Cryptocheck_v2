import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Menu, Layout, Drawer } from 'antd';
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const TopNavigation = () => {
  const [current, setCurrent] = useState('mail')
  const [drawerVisible, setDrawerVisible] = useState(false)
  const { Header } = Layout
  const { push } = useHistory()

  const handleClick = e => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible)
  }

  return (
    <div className="overall-nav-container">
      <Header className="navigation_container" style={{ boxShadow: "0px 4px 8px rgba(170, 1, 250, 0.13)" }}>
        <p className="logo" onClick={() => push('/')}>CryptoCheck</p>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item>
            <a href="https://danieldon.netlify.com">View portfolio</a>
          </Menu.Item>
        </Menu>
      </Header>
    </div>
  )
}

export default TopNavigation
