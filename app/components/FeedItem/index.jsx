import React from 'react'
import { Card } from 'antd'
import './style.scss'

class FeedItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="feed-item">
        <Card className="feed-item__card">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    )
  }
}

export default FeedItem
