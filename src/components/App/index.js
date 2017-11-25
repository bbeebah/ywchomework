
// src/components/App/index.js
import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import logo from './logo.png';
import './App.css';

import { Jumbotron, Button} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  gotoAnnouncement() {
    browserHistory.push('/showall');
  }
  gotoDetail() {
    browserHistory.push('/interview');
  }
  
  render() {
    document.title ="YWC | powered by bbeebah"; 
    
    document.getElementsByTagName("META")[2].content="Your description about the page or site here to set dynamically";
    
    return (
      <div className="App">
        <title>HTML Reference</title>
      
        <Jumbotron className=" App-header ">
        <h1 className="display-3">
          <img src={logo} className="App-logo" alt="logo" />
        </h1>
        <p className="lead">DIGITAL INNOVATION.</p>
        <hr className="my-2" />
        <p style={{fontStyle: 'italic'}}>ประกาศผู้มีสิทธิ์เข้าสัมภาษณ์</p>
        <p className="lead">
          <Button outline color="info" className="" onClick= {this.gotoAnnouncement} style={{fontSize:'30px'}}> Announcement </Button>
        </p>
        <p className="lead">
          <Button outline color="info" className="" onClick= {this.gotoDetail} style={{fontSize:'30px'}}> Interviwe Details </Button>
        </p>
      </Jumbotron>
      </div>
    );
  }
}

export default App;