import React from 'react'
import { Menu, Divider, Button } from 'antd'
import { Icon } from 'react-fa'
import './style.scss'

class MainMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      headerMenuSelection: ['header_1'],
      sectionMenuSelection: [],
      footerMenuSelection: [],
    }
  }

  manageSelections = event => {
    let itemType = event.key.split('_')[0]

    if (itemType === 'header') {
      this.setState({
        headerMenuSelection: [event.key],
        sectionMenuSelection: [],
        footerMenuSelection: [],
      })
    } else if (itemType === 'section') {
      this.setState({
        headerMenuSelection: [],
        sectionMenuSelection: [event.key],
        footerMenuSelection: [],
      })
    } else if (itemType === 'footer') {
      this.setState({
        headerMenuSelection: [],
        sectionMenuSelection: [],
        footerMenuSelection: [event.key],
      })
    }
  }

  render() {
    const { headerMenuSelection, sectionMenuSelection, footerMenuSelection } = this.state

    return (
      <div className="main-menu">
        <Menu mode="inline" selectedKeys={headerMenuSelection} style={{ ...this.props.style }}>
          <Menu.Item key="header_1" onClick={this.manageSelections}>
            <Icon name="th-list" className="list-item-icon" />
            <span className="ant-menu-item__text">&nbsp; All Posts</span>
          </Menu.Item>
          <Menu.Item key="header_2" onClick={this.manageSelections}>
            <span className="ant-menu-item__text">
              <Icon name="bolt" className="list-item-icon" />
              &nbsp; Must See
            </span>
          </Menu.Item>
        </Menu>

        <div className="main-menu__subheader">
          <p>BOARDS</p>
          <div className="main-menu__subheader__button space-left--10">
            <Icon name="plus-circle" size="lg" />
          </div>
        </div>

        <Menu mode="inline" style={{ ...this.props.style }} selectedKeys={sectionMenuSelection}>
          <Menu.Item key="section_1" onClick={this.manageSelections}>
            <span className="ant-menu-item__text space-left--20">&nbsp; Design</span>
          </Menu.Item>
          <Menu.Item key="section_2" onClick={this.manageSelections}>
            <span className="ant-menu-item__text space-left--20">&nbsp; Onboarding</span>
          </Menu.Item>
          <Menu.Item key="section_3" onClick={this.manageSelections}>
            <span className="ant-menu-item__text space-left--20">&nbsp; Things to do</span>
          </Menu.Item>
        </Menu>

        <br />

        <Menu mode="inline" style={{ ...this.props.style }} selectedKeys={footerMenuSelection}>
          <Menu.Item key="footer_1" onClick={this.manageSelections}>
            <span className="ant-menu-item__text space-left--20">&nbsp; Draft</span>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default MainMenu
