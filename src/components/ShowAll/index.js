import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Table, Container } from 'reactstrap';

import Navbar from '../Navbar';
import Announce from '../Announce';
import Footer from '../Footer';

import './style.css';


class ShowAll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchKey:"",
    }
  }

  searching(searchKey){
    this.setState({searchKey});
  }



  render() {
   
    return (
      <div>
        <div style={{height: '65px'}}>
          
        </div>
        <Navbar searching={this.searching.bind(this)} searchKey={this.state.searchKey}/>
        <Announce searchKey={this.state.searchKey} searching={this.searching.bind(this)}/>
        
        <Footer/>

      </div>
    );
  
  }

}

export default ShowAll;