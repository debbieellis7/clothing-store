import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import Shop from './components/Pages/Shop/Shop'
import SignUpAndSignIn from './components/Pages/SignUp-SignIn/SignUp-SignIn'
import Header from './components/Header/Header'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignUpAndSignIn} />
      </Switch>
    </div>
  )
}

export default App
