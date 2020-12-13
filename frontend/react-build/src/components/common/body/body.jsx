import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './body.scss'
import AboutClient from '../../core/about/aboutClient'

export default class body extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
    render() {
        return (
          <>
            <Router>
              <Switch>
                  <Route to='/about' exact component={AboutClient} />
              </Switch>
            </Router>
          </>
        );
    }
}
