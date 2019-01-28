import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.scss'

class AddCommentButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDataAvailable: false,
    }
  }

  render() {
    return (
      <div className="add-comment-button">
        <FontAwesomeIcon
          className="add-comment-button__icon list-item-icon space-right--5"
          icon="comment-alt"
        />
        Add a comment
      </div>
    )
  }
}

export default AddCommentButton
