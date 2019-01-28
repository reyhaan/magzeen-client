import React from 'react'
import { Card, Row } from 'antd'
import { Picker, Emoji } from 'emoji-mart'
import Icon from 'react-fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.scss'

class Reactions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showPicker: false,
    }
  }

  hidePicker = () => {
    this.setState(
      {
        showPicker: false,
      },
      () => {
        document.removeEventListener('click', this.hidePicker)
      },
    )
  }

  showPicker = event => {
    event.preventDefault()
    this.setState(
      {
        showPicker: !this.state.showPicker,
      },
      () => {
        document.addEventListener('click', this.hidePicker)
      },
    )
  }

  render() {
    const { showPicker } = this.state
    return (
      <div className="reactions-container space-left--15">
        <div className="reactions-container__button" onClick={this.showPicker}>
          <FontAwesomeIcon icon={['far', 'grin']} />
          <span> +</span>
        </div>
        {showPicker && (
          <Picker
            style={{ marginLeft: '5px', boxShadow: '0px 2px 3px #00000014' }}
            className="reactions-container__picker"
            emoji="point_up"
          />
        )}
      </div>
    )
  }
}

export default Reactions
