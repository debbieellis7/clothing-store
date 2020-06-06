import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Home from './components/Pages/Home/Home'
import Shop from './components/Pages/Shop/Shop'
import SignInAndSignUp from './components/Pages/SignInAndSignUp/SignInAndSignUp'
import Checkout from './components/Pages/Checkout/Checkout'
import Header from './components/Header/Header'
import { auth, createUserProfileDocument } from './firebase/utils'
import { setCurrentUser } from './redux/actions/user'
import { selectCurrentUser } from './redux/selectors/user'
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
          <Route exact path='/checkout' component={Checkout} />
          <Route
            exact
            path='/signin'
            render={() => this.props.currentUser ? <Redirect to='/'/> : <SignInAndSignUp />}
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps, { setCurrentUser })(App)
