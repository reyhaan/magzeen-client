import React from 'react'
import { Card, Row, Col } from 'antd'
import './style.scss'

class Signup extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Row className="signup-page">
        <Col className="signup-page__left" span={12}>
          left
        </Col>
        <Col className="signup-page__right" span={12}>
          right
        </Col>
      </Row>
    )
  }
}

export default Signup
