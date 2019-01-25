import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import './style.scss'
import logo from '../../assets/logo.png'
import { observer } from 'mobx-react'
import MainMenu from '../../components/MainMenu'
import PageHeader from '../../components/PageHeader'
import Feed from '../../components/Feed'

const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout

@observer
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      windowHeight: window.innerHeight,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        windowHeight: window.innerHeight,
      })
    })
  }

  render() {
    return (
      <Layout className="dashboard">
        <Header className="dashboard__header">
          <img className="dashboard__header__logo" src={logo} alt="magzeen" />
        </Header>
        <Content className="dashboard__content">
          <Layout className="dashboard__content__container">
            <Sider className="dashboard__content__container__sider" width={200}>
              <MainMenu style={{ marginTop: 25 }} />
            </Sider>
            <Content style={{ minHeight: this.state.windowHeight - 74, background: '#eee' }}>
              <PageHeader />
              <Feed />
            </Content>
          </Layout>
        </Content>
      </Layout>
    )
  }
}

export default Dashboard
