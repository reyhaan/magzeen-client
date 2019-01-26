import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import './style.scss'
import { observer } from 'mobx-react'
import MainMenu from '../../components/MainMenu'
import PageHeader from '../../components/PageHeader'
import Feed from '../../components/Feed'
import GlobalHeader from '../../components/GlobalHeader'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

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
        <GlobalHeader />
        <Content className="dashboard__content group">
          <Layout className="dashboard__content__container group">
            <Sider className="dashboard__content__container__sider group" width={200}>
              <MainMenu />
            </Sider>
            <Content
              className="dashboard__content__container__main group"
              style={{ minHeight: this.state.windowHeight - 74, backgroundColor: 'transparent' }}
            >
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
