import React from 'react'
import Home from '../Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Resume from '../Resume'

function App () {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={'/'}><Home/></Route>
          <Route path={'/resume'}><Resume/></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
