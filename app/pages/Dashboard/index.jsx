import React from 'react'
import { Layout } from 'antd'
import './style.scss'
import logo from '../../assets/shopify-logo.png'
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
        <Header>
          <img className="logo" src={logo} alt="" />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="dashboard-container" />
        </Content>
      </Layout>
    )
  }
}

export default Dashboard
