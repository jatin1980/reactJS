
//import logo from './logo.svg';
import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import { BrowserRouter, Switch, Route,Redirect  } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';


//import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
     
        <Switch>

       
       
        <Navigation></Navigation>
        </Switch>
      

  </BrowserRouter>




    

    );
  }
}

export default App;
