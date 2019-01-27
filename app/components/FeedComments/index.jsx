import React from 'react'
import { Card, Row, Col, Comment, Tooltip, Avatar } from 'antd'
import moment from 'moment'
import './style.scss'

class FeedComments extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="feed-item">
        <Row>
          <Comment
            author={<a>Han Solo</a>}
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes
                beautifully and efficiently.
              </p>
            }
            datetime={
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
        </Row>
      </div>
    )
  }
}

export default FeedComments
