import React from 'react'
import { Card, Row, Col } from 'antd'
import './style.scss'

class FeedItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="feed-item">
        <Card className="feed-item__card">
          <Row>Header</Row>
          <Row>body</Row>
          <Row>footer</Row>
        </Card>
      </div>
    )
  }
}

export default FeedItem
