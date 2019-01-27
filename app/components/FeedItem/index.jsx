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
      isFeedOptionsVisible: false,
    }
  }

  handleMouseOver = () => {
    this.setState({
      isFeedOptionsVisible: true,
    })
  }

  handleMouseLeave = () => {
    this.setState({
      isFeedOptionsVisible: false,
    })
  }

  handleToggleMore = () => {}

  render() {
    const { isCommentsVisible } = this.state
    return (
      <div
        className="feed-item"
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      >
        <Card className="feed-item__card">
          <FeedHeader showOptions={this.state.isFeedOptionsVisible} />
          <FeedBody />
          <FeedActions onToggleMore={this.handleToggleMore} />
          <FeedComments isVisible={isCommentsVisible} />
        </Card>
      </div>
    )
  }
}

export default FeedItem
