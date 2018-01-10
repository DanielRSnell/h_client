import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

class SubNav extends Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Menu
        theme="dark"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
      <Menu.Item 
            key="logo"
            className="menu-logo">
        <Link to={{pathname: '/'}}> <Icon type="BTC" />Q U I C K L I N K S</Link>
        </Menu.Item>
        <Menu.Item key="link-1" className="item-left">
            NAV ITEM
        </Menu.Item>
        <Menu.Item key="link-2" className="item-left">
            NAV ITEM
        </Menu.Item>
        <Menu.Item key="link-3" className="item-left">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">NAV ITEM</a>
        </Menu.Item>
        <Menu.Item key="link-4" className="item-left">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">NAV ITEM</a>
        </Menu.Item>

      </Menu>
    );
  }
}

export default withRouter(SubNav);