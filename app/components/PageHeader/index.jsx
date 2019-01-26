import React from 'react'
import { Row, Col, Button } from 'antd'
import { Icon } from 'react-fa'
import './style.scss'

class PageHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="page-header">
        <Row>
          <Col span={18} className="page-header--left">
            <h2 className="page-header--left__heading">All Posts</h2>
          </Col>
          <Col span={6} className="page-header--right">
            <Button>
              <Icon name="pencil" className="list-item-icon" />
              &nbsp; New Post
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default PageHeader
