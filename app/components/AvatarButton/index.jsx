import React from 'react'
import { Card, Row, Col, Dropdown, List, Avatar } from 'antd'
import { Icon } from 'react-fa'
import './style.scss'

class AvatarButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
    }
  }

  toggleMenu = () => {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    })
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
        <a
          className="avatar-btn__user-image"
          href="#"
          onClick={() => {
            this.toggleMenu()
          }}
        >
          <Icon name="user-circle" /> &nbsp; <Icon name="caret-down" />
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
                      <Icon name={item.icon} className="space-right--15" />
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
