import React from 'react'
import { Row, Col, Popover } from 'antd'
import Avatar from 'react-avatar'
import PropTypes from 'prop-types'
import { Icon } from 'react-fa'
import './style.scss'

class FeedHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const content = (
      <div>
        <p>Dave Chapel</p>
        <p>Matt Thoring</p>
      </div>
    )
    return (
      <div className="feed-header">
        <Row>
          <Col className="feed-header__avatar-container">
            <Avatar name="Mohammad Rehaan" size="40" round={true} />
          </Col>
          <Col className="feed-header__meta" span={18}>
            <div className="group">Mohammad Rehaan in Design</div>
            <div className="feed-header__meta__details">2 days ago</div>
            <div className="separator" />
            <div className="feed-header__meta__details viewer-btn">
              <Popover content={content} placement="bottomLeft">
                <Icon name="user" />
                &nbsp; 5 Viewers
              </Popover>
            </div>
          </Col>
          <Col className="feed-header__options">
            {this.props.showOptions && (
              <a>
                <Icon name="ellipsis-h" size="lg" />
              </a>
            )}
          </Col>
        </Row>
      </div>
    )
  }
}

FeedHeader.propTypes = {
  showOptions: PropTypes.bool,
}

FeedHeader.defaultProps = {
  showOptions: false,
}

export default FeedHeader
