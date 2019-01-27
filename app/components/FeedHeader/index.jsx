import React from 'react'
import { Row, Col } from 'antd'
import Avatar from 'react-avatar'
import './style.scss'

class FeedHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="feed-header">
        <Row>
          <Col className="feed-header__avatar-container">
            <Avatar name="Mohammad Rehaan" size="40" round={true} />
          </Col>
          <Col className="feed-header__meta" span={18}>
            <div className="group">Mohammad Rehaan</div>
            <div>Details</div>
          </Col>
          <Col className="feed-header__options" span={3}>
            <div>options</div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default FeedHeader
