import React from 'react'
import { Layout, Row, Col, Dropdown, Button, Menu } from 'antd'
import { Icon } from 'react-fa'
import logo from '../../assets/logo.png'
import './style.scss'

const { Header } = Layout

class GlobalHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  menu = () => {
    return (
      <Menu>
        <Menu.Item key="1">Settings</Menu.Item>
        <Menu.Item key="2">Signout</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    )
  }

  render() {
    return (
      <Header className="global-header">
        <Row>
          <Col span={8} className="global-header__left">
            <img className="global-header__left__logo" src={logo} alt="magzeen" />
          </Col>
          <Col span={8} offset={8} className="global-header__right">
            <Dropdown overlay={this.menu}>
              <a className="global-header__right--profile-button" href="#">
                <Icon name="user-circle" /> <Icon name="caret-down" />
              </a>
            </Dropdown>
            <div className="global-header__right__notification-btn">
              <Icon name="bell" />
            </div>
          </Col>
        </Row>
      </Header>
    )
  }
}

export default GlobalHeader
