import React from 'react'
import { Card, Row, Col } from 'antd'
import './style.scss'
import ExpandButton from '../../ui-components/ExpandButton'

class FeedActions extends React.Component {
  constructor(props) {
    super(props)
  }

  handleToggle = isExpanded => {
    console.log(isExpanded)
  }

  render() {
    return (
      <div className="feed-actions">
        <Row>
          <div className="feed-actions__comment">comment</div>
          <div className="feed-actions__reaction">reaction</div>
          <div className="feed-actions__more">
            <ExpandButton onToggle={this.handleToggle} />
          </div>
        </Row>
      </div>
    )
  }
}

export default FeedActions
