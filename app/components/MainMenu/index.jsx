import React from 'react'
import { Menu } from 'antd'
import './style.scss'

class MainMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ ...this.props.style }}
      >
        <Menu.Item key="5">
          <span>option 1</span>
        </Menu.Item>
        <Menu.Item key="6">
          <span>option 2</span>
        </Menu.Item>
        <Menu.Item key="7">
          <span>option 3</span>
        </Menu.Item>
        <Menu.Item key="8">
          <span>option 4</span>
        </Menu.Item>
      </Menu>
    )
  }
}

export default MainMenu
