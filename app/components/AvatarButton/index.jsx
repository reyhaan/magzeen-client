import React from 'react'
import { Card, Row, Col, Dropdown, List } from 'antd'
import { Icon } from 'react-fa'
import Avatar from 'react-avatar'
import './style.scss'

class AvatarButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
    }

    this.showMenu = this.showMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  closeMenu = () => {
    this.setState(
      {
        isMenuVisible: false,
      },
      () => {
        document.removeEventListener('click', this.closeMenu)
      },
    )
  }

  showMenu = event => {
    event.preventDefault()
    this.setState(
      {
        isMenuVisible: !this.state.isMenuVisible,
      },
      () => {
        document.addEventListener('click', this.closeMenu)
      },
    )
  }

  render() {
    const data = [
      {
        title: 'My Profile',
        icon: 'user',
      },
      {
        title: 'Notifications',
        icon: 'bell',
      },
      {
        title: 'Ant Design Title 3',
        icon: '',
      },
      {
        title: 'Ant Design Title 4',
        icon: '',
      },
    ]

    return (
      <div className="avatar-btn">
        <a className="avatar-btn__user-image" href="#" onClick={this.showMenu}>
          <Avatar name="Rehaan" size={32} round={true} textSizeRatio={2.2} />
          &nbsp;
          <Icon name="caret-down" />
        </a>
        {this.state.isMenuVisible && (
          <div className="avatar-btn__menu-container">
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  {
                    <a href="#">
                      <Icon name={item.icon} className="space-right--15 list-item-icon" />
                      {item.title}
                    </a>
                  }
                </List.Item>
              )}
            />
          </div>
        )}
      </div>
    )
  }
}

export default AvatarButton
