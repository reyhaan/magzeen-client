import React from 'react'
import { Card, Row, Col } from 'antd'
import './style.scss'
import FeedHeader from '../FeedHeader'
import FeedBody from '../FeedBody'
import FeedActions from '../FeedActions'
import FeedComments from '../FeedComments'

class FeedItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="feed-item">
        <Card className="feed-item__card">
          <FeedHeader options={true} />
          <FeedBody />
          <FeedActions />
          <FeedComments />
        </Card>
      </div>
    )
  }
}

export default FeedItem
