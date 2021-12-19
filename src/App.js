import React, {useState} from 'react'
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'
import Login from './component/Login'
import Home from './component/Home'
import Dashboard from './component/Dashboard'
import Signup from './component/Signup'

const App = () => {
  const[user, setUser] = useState(false)
  return (
    
    <div>
      <BrowserRouter>
         <div className='header'>
         { user ?
          <>
            <NavLink exact activeClassName='active' to='/dashboard'/>
            </>
            :
            <>
            <NavLink exact activeClassName='active' to='/home'/>
            <NavLink activeClassName='active' to='/login'/>
            <NavLink activeClassName='active' to='/signup'/>
            </>
          }
         </div>
        <div className='content'>
          {
            !user ? <Switch>
              <Route exact path='/' render={() => <Home setUser={setUser} />} />
              <Route path='/login' render={() => <Login setUser={setUser} />} />
              <Route path='/signup' render={() => <Signup setUser={setUser} />} />
            </Switch> 
            : 
            <Switch>
              <Route exact path='/dashboard' render={() => <Dashboard setUser={setUser} />}/>
            </Switch>
          }
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

