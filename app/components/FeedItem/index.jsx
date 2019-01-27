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
    this.state = {
      feedOptions: false,
    }
  }

  handleMouseOver = () => {
    this.setState({
      feedOptions: true,
    })
  }

  handleMouseLeave = () => {
    this.setState({
      feedOptions: false,
    })
  }

  render() {
    return (
      <div
        className="feed-item"
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      >
        <Card className="feed-item__card">
          <FeedHeader options={this.state.feedOptions} />
          <FeedBody />
          <FeedActions />
          <FeedComments />
        </Card>
      </div>
    )
  }
}

export default FeedItem
