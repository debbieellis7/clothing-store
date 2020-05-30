import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import Shop from './components/Pages/Shop/Shop'
import SignUpAndSignIn from './components/Pages/SignUp-SignIn/SignUp-SignIn'
import Header from './components/Header/Header'
import { auth } from './firebase/utils'
import './App.css'

class App extends React.Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignUpAndSignIn} />
        </Switch>
      </div>
    )
  }
}

export default App
