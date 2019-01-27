import React from 'react'
import { Card, Row } from 'antd'
import './style.scss'

class FeedBody extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="feed-body">
        <Row className="feed-body__header">
          <h2>This is a sample post on Magzeen!</h2>
        </Row>
        <Row className="feed-body__content">
          <p className="wrapword">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </Row>
      </div>
    )
  }
}

export default FeedBody
