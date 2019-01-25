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
        style={{ height: '100%' }}
      >
        <Menu.Item key="5">option5</Menu.Item>
        <Menu.Item key="6">option6</Menu.Item>
        <Menu.Item key="7">option7</Menu.Item>
        <Menu.Item key="8">option8</Menu.Item>
      </Menu>
    )
  }
}

export default MainMenu
