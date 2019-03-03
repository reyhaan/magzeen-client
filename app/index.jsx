import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './pages/App'
import { Provider } from 'mobx-react'
import { stores } from './stores'
import Login from './pages/Login'
import Signup from './pages/Signup'

// add all required css libraries here at the root
import 'antd/dist/antd.css'
import './style/override.scss'
import './style/app.scss'
import 'emoji-mart/css/emoji-mart.css'

// Add fontawesome to the app
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

class Index extends React.Component {
  render() {
    return (
      <Router>
        <Provider stores={stores}>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/app" component={App} />
            <Route exact path="/" component={App} />
          </Switch>
        </Provider>
      </Router>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept(function() {
    window.location.reload()
  })
  module.hot.dispose(function() {
    // module is about to be replaced
  })
}
