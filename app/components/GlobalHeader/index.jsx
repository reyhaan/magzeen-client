import React from 'react'
import { Layout, Row, Col, Dropdown, Button, Menu, Input, Badge } from 'antd'
import { Icon } from 'react-fa'
import logo from '../../assets/logo.png'
import './style.scss'
import AvatarButton from '../AvatarButton'

const { Header } = Layout
const { Search } = Input

class GlobalHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Header className="global-header">
        <Row>
          <Col span={8} className="global-header__left">
            <img className="global-header__left__logo" src={logo} alt="magzeen" />
          </Col>
          <Col span={8} className="global-header__center">
            <Search
              placeholder="Search posts..."
              onSearch={value => console.log(value)}
              className="global-header__center__search"
            />
          </Col>
          <Col span={8} className="global-header__right">
            <AvatarButton />
            <div className="global-header__right__notification-btn">
              <Badge dot={true}>
                <Icon name="bell" />
              </Badge>
            </div>
          </Col>
        </Row>
      </Header>
    )
  }
}

export default GlobalHeader
