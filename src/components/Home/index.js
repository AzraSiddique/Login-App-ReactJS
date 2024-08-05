import {Component} from 'react'

import './index.css'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {loggedIn: false}

  clickBtn = () => {
    this.setState(prevState => ({loggedIn: !prevState.loggedIn}))
  }

  render() {
    const {loggedIn} = this.state

    return (
      <div className="container">
        <div className="login-container">
          <Message loggedIn={loggedIn} />

          {loggedIn ? (
            <Logout logoutBtn={this.clickBtn} />
          ) : (
            <Login loginBtn={this.clickBtn} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
