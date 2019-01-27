import React from 'react'
import { Card, Row, Col } from 'antd'
import './style.scss'

class FeedComments extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="feed-item">
        <Row>Feed Comments</Row>
      </div>
    )
  }
}

export default FeedComments
