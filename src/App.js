import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import './App.css'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  )
}

export default App
