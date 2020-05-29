import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import Shop from './components/Pages/Shop/Shop'
import './App.css'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  )
}

export default App
