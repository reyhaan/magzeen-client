import React from 'react'
import { Card, Row, Col } from 'antd'
import PropTypes from 'prop-types'
import './style.scss'
import ExpandButton from '../../ui-components/ExpandButton'
import CommentButton from '../CommentButton'
import Reactions from '../Reactions'

class FeedActions extends React.Component {
  constructor(props) {
    super(props)
  }

  handleToggleMore = isExpanded => {
    this.props.onToggleMore(isExpanded)
  }

  handleToggleComment = isExpanded => {
    this.props.onToggleMore(isExpanded)
  }

  render() {
    return (
      <div className="feed-actions">
        <Row className="feed-actions__row">
          <div className="feed-actions__comment">
            <CommentButton onClick={this.handleToggleComment} />
          </div>
          <div className="feed-actions__reaction">
            <Reactions />
          </div>
          <div className="feed-actions__more">
            <ExpandButton onToggle={this.handleToggleMore} />
          </div>
        </Row>
      </div>
    )
  }
}

FeedActions.propTypes = {
  onToggleMore: PropTypes.func,
}

FeedActions.defaultProps = {
  onToggleMore: () => {},
}

export default FeedActions
