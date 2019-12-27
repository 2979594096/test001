import './style.less';
import React, { Component } from 'react'
import {Redirect,Switch,NavLink,Route} from "react-router-dom"
import Home from './components/Home'
import Info from './components/Info'
 class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
          <Route path="/home" component={Home}/>
            <Route path="/info" component={Info}/>
            <Route path="/" render={()=><Redirect to="/home"/>}/>
          </Switch>
      </div>
    )
  }
}


export default App;
