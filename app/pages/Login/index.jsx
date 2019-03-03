import React from 'react'
import { Card, Row } from 'antd'
import './style.scss'

class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="feed-body">
        <Row>
          <p className="wrapword">Login page</p>
        </Row>
      </div>
    )
  }
}

export default Login
