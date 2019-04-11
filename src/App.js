import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './History';
import './homehistory.css'

class App extends Component {
    render() {
        return (
            
              <div>
                <NavLink exact to="/">Accueil</NavLink>
                <NavLink to="/notre-histoire" activeClassName="selected">Notre Histoire</NavLink>

                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/notre-histoire" component={History} />
                </Switch>
              </div>
          
        );
    }
}

export default App;