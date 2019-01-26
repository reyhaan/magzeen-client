import React from 'react'
import { Card, Row, Col, Dropdown, List, Divider } from 'antd'
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
    return (
      <div className="avatar-btn">
        <a className="avatar-btn__user-image" href="#" onClick={this.showMenu}>
          <Avatar name="Rehaan" size={32} round={true} textSizeRatio={2.2} />
          &nbsp;
          <Icon name="caret-down" />
        </a>
        {this.state.isMenuVisible && (
          <div className="avatar-btn__menu-container">
            <List>
              <List.Item>
                <a href="#">
                  <Icon name="user" className="space-right--15 list-item-icon" />
                  My Profile
                </a>
              </List.Item>
              <List.Item>
                <a href="#">
                  <Icon name="bell" className="space-right--15 list-item-icon" />
                  Notifications
                </a>
              </List.Item>
            </List>
            <Divider />
            <List>
              <List.Item>
                <a href="#">
                  <Icon name="users" className="space-right--15 list-item-icon" />
                  Manage Team
                </a>
              </List.Item>
              <List.Item>
                <a href="#">
                  <Icon name="wrench" className="space-right--15 list-item-icon" />
                  Settings
                </a>
              </List.Item>
              <List.Item>
                <a href="#">
                  <Icon name="bullhorn" className="space-right--15 list-item-icon" />
                  What's New
                </a>
              </List.Item>
              <List.Item>
                <a href="#">
                  <Icon name="life-ring" className="space-right--15 list-item-icon" />
                  Support
                </a>
              </List.Item>
            </List>
            <Divider />
            <List>
              <List.Item>
                {
                  <a href="#">
                    <Icon name="sign-out" className="space-right--15 list-item-icon" />
                    Signout
                  </a>
                }
              </List.Item>
            </List>
          </div>
        )}
      </div>
    )
  }
}

export default AvatarButton
