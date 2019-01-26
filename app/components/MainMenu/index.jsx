import React from 'react'
import { Menu } from 'antd'
import { Icon } from 'react-fa'
import './style.scss'

class MainMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={['5']}
        defaultOpenKeys={['5']}
        style={{ ...this.props.style }}
      >
        <Menu.Item key="5">
          <Icon name="th-list" />
          <span className="ant-menu-item__text">&nbsp; All Posts</span>
        </Menu.Item>
        <Menu.Item key="6">
          <span className="ant-menu-item__text">
            <Icon name="bolt" />
            &nbsp; Must See
          </span>
        </Menu.Item>
        <Menu.Item key="7">
          <span className="ant-menu-item__text">
            <Icon name="edit" />
            &nbsp; Draft
          </span>
        </Menu.Item>
      </Menu>
    )
  }
}

export default MainMenu
