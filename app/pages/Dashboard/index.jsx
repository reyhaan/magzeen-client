import React from 'react'
import { Layout } from 'antd'
import './style.scss'
import logo from '../../assets/logo.png'
import { observer } from 'mobx-react'

const { Header, Content } = Layout

@observer
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <Layout className="layout dashboard">
        <Header className="dashboard__header">
          <img className="dashboard__header__logo" src={logo} alt="magzeen" />
        </Header>
        <Content className="dashboard__content">
          <div className="dashboard__content__container" />
        </Content>
      </Layout>
    )
  }
}

export default Dashboard
