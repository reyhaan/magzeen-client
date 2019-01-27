import React from 'react'
import Icon from 'react-fa'
import './style.scss'

class Feed extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Icon name="comment" />
        Add comment
      </div>
    )
  }
}

export default Feed
