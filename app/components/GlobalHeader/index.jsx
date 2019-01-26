import React from 'react'
import { Layout, Row, Col } from 'antd'
import { Icon } from 'react-fa'
import logo from '../../assets/logo.png'
import './style.scss'

const { Header } = Layout

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
          <Col span={8} offset={8} className="global-header__right">
            <Icon name="bell" />
          </Col>
        </Row>
      </Header>
    )
  }
}

export default GlobalHeader
