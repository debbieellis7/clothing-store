import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/Pages/Home/Home'
import Shop from './components/Pages/Shop/Shop'
import SignInAndSignUp from './components/Pages/SignInAndSignUp/SignInAndSignUp'
import Header from './components/Header/Header'
import { auth, createUserProfileDocument } from './firebase/utils'
import { setCurrentUser } from './redux/user/userActions'
import './App.css'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount () {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }

      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    )
  }
}

export default connect(null, { setCurrentUser })(App)
