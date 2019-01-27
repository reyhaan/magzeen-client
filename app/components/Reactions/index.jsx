import React from 'react'
import { Card, Row } from 'antd'
import EmojiReact from 'react-emoji-react'
import './style.scss'

class Reactions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emojis: [],
    }
  }

  onReaction(name) {
    const emojis = this.state.emojis.map(emoji => {
      if (emoji.name === name) {
        emoji.count += 1
      }
      return emoji
    })
    this.setState({ emojis })
  }

  onEmojiClick(name) {
    if (this.state.emojis.length >= 4) {
      return
    }
    const emojis = this.state.emojis.concat([{ name, count: 1 }])
    this.setState({ emojis })
  }

  render() {
    return (
      <div className="feed-body">
        <EmojiReact
          reactions={this.state.emojis}
          onReaction={name => this.onReaction(name)}
          onEmojiClick={name => this.onEmojiClick(name)}
        />
      </div>
    )
  }
}

export default Reactions
