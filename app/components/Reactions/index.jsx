import React from 'react'
import { Card, Row } from 'antd'
import { Picker, Emoji } from 'emoji-mart'
import Icon from 'react-fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.scss'

class Reactions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="reactions-container space-left--15">
        <div className="reactions-container__button">
          <FontAwesomeIcon icon={['far', 'grin']} />
          <span> +</span>
        </div>
        {/* <Picker emoji="point_up" /> */}
      </div>
    )
  }
}

export default Reactions
