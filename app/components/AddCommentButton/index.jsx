import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Avatar from 'react-avatar'
import { Tooltip } from 'antd'
import './style.scss'

class AddCommentButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasData: true,
    }
  }

  buttonWithData = () => {
    return (
      <div className="add-comment-button">
        <Tooltip title="Rehaan">
          <span>
            <Avatar
              className="add-comment-button__avatar"
              name="Rehaan"
              size={22}
              round={true}
              textSizeRatio={2.2}
            />
          </span>
        </Tooltip>
        <Tooltip title="Jasmine">
          <span>
            <Avatar
              className="add-comment-button__avatar"
              name="Jasmine"
              size={22}
              round={true}
              textSizeRatio={2.2}
            />
          </span>
        </Tooltip>
        <Tooltip title="Neha">
          <span>
            <Avatar
              className="add-comment-button__avatar"
              name="Neha"
              size={22}
              round={true}
              textSizeRatio={2.2}
            />
          </span>
        </Tooltip>
        <span className="add-comment-button__text">2 comments</span>
      </div>
    )
  }

  buttonDefault = () => {
    return (
      <div className="add-comment-button">
        <FontAwesomeIcon className="add-comment-button__icon list-item-icon" icon="comment-alt" />
        <span className="add-comment-button__text noselect">Add a comment</span>
      </div>
    )
  }

  render() {
    const { hasData } = this.state
    if (hasData) {
      return this.buttonWithData()
    } else {
      return this.buttonDefault()
    }
  }
}

export default AddCommentButton
