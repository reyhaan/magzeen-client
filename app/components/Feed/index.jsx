import React from 'react'
import FeedItem from '../../components/FeedItem'
import './style.scss'

class Feed extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <FeedItem></FeedItem>
      </div>
    )
  }
}

export default Feed
