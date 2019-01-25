import React from 'react'
import { Menu, Icon } from 'antd'
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
          <span>
            <Icon type="file-text" theme="filled" />
            All Posts
          </span>
        </Menu.Item>
        <Menu.Item key="6">
          <span>
            <Icon type="notification" theme="filled" />
            Must See
          </span>
        </Menu.Item>
        <Menu.Item key="7">
          <span>
            <Icon type="edit" theme="filled" />
            Draft
          </span>
        </Menu.Item>
      </Menu>
    )
  }
}

export default MainMenu
