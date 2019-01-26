import React from 'react'
import { Menu, Divider, Button } from 'antd'
import { Icon } from 'react-fa'
import './style.scss'

class MainMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main-menu">
        <Menu
          mode="inline"
          defaultSelectedKeys={['5']}
          defaultOpenKeys={['5']}
          style={{ ...this.props.style }}
        >
          <Menu.Item key="5">
            <Icon name="th-list" className="list-item-icon" />
            <span className="ant-menu-item__text">&nbsp; All Posts</span>
          </Menu.Item>
          <Menu.Item key="6">
            <span className="ant-menu-item__text">
              <Icon name="bolt" className="list-item-icon" />
              &nbsp; Must See
            </span>
          </Menu.Item>
        </Menu>

        <div className="main-menu__subheader">
          <p>BOARDS</p>
          <div className="main-menu__subheader__button space-left--10">
            <Icon name="plus-circle" size="lg" />
          </div>
        </div>

        <Menu mode="inline" style={{ ...this.props.style }}>
          <Menu.Item key="1">
            <span className="ant-menu-item__text space-left--20">&nbsp; Design</span>
          </Menu.Item>
          <Menu.Item key="2">
            <span className="ant-menu-item__text space-left--20">&nbsp; Onboarding</span>
          </Menu.Item>
          <Menu.Item key="3">
            <span className="ant-menu-item__text space-left--20">&nbsp; Things to do</span>
          </Menu.Item>
        </Menu>

        <br />

        <Menu mode="inline" style={{ ...this.props.style }}>
          <Menu.Item key="7">
            <span className="ant-menu-item__text">
              <Icon name="edit" className="list-item-icon" />
              &nbsp; Draft
            </span>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default MainMenu
