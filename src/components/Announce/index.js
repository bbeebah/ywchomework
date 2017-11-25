import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Tooltip , Popover, PopoverHeader, PopoverBody, Row, Col, Table} from 'reactstrap';
import {browserHistory} from 'react-router';
import classnames from 'classnames';

import content from './img/content.png';
import design from './img/design.png';
import marketing from './img/marketing.png';
import programming from './img/programming.png';
import './style.css';


const API = 'https://ywc15.ywc.in.th/api/interview';

export default class Example extends React.Component {

  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      list: [],
      activeTab: '1',
      model: false
    };
    this.togglemodel = this.togglemodel.bind(this);
  }
  
  componentDidMount() {
    fetch(API ) // + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ list: data }));
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
        
      });
    }
  }
  togglemodel(){
    this.setState({
      model: !this.state.model
    });
  }
  gotoAnnouncement(page) {
    browserHistory.push('/showall');
  }

  candidate(type){ 
    // type: (1) programming (2) marketing (3) design (4) content
    if(this.state.activeTab === '5') return;
    var { list } = this.state;
    list.sort(function(a,b){
      var x = a.interviewRef < b.interviewRef? -1:1; 
      return x; 
    })

    var searchString = this.props.searchKey.trim();
    var major = this.type;

    if(searchString.length > 0 ){
      if(searchString.indexOf(' ') >0){ // search by full name : firstName _space_ lastName
        list = list.filter(function(l){
          const name = l.firstName + ' ' + l.lastName;
          return name.match(searchString); 
        });
      }
      else {list = list.filter(function(l){ // search by firstName or lastName , some words
        return l.firstName.match(searchString) || l.lastName.match(searchString) || l.interviewRef.match(new RegExp(searchString, "i")); 
      })}
    }

    
    return(
        <div className="Each-table">
            <div style={{display: 'flex', justifyContent: 'center'}}>
             <h2> {type} </h2>
            </div>
        
            <div style={{display: 'flex', justifyContent: 'center'}}>
            {(type === 'content') ? <img src={content} className="icon-logo" alt={type} /> :
              (type === 'design') ? <img src={design} className="icon-logo" alt={type} /> :
              (type === 'marketing') ? <img src={marketing} className="icon-logo" alt={type} /> :
              <img src={programming} className="icon-logo" alt={type} />}

            
            
            <br/>
            </div>
            
            
            <Table className="outline">
            <thead>
            
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Interview Time</th>
            </tr>
            </thead>
            <tbody>
            {list.map((li, i) => {
                if(li.major === type)
                { 
                    return(<tr > 
                    <th scope="row" key={i}> {li.interviewRef} </th>
                    <td> {li.firstName} {li.lastName}</td>
                    <td> {this.inttime(li.interviewRef)} </td>
                    
                    </tr>
                )}return(<div></div>);
                }
                
            )}
            
            </tbody>
          </Table>
        </div>
      );
  }

  inttime(no){
    const type = no.substring(0,2);
    const ref = no.substring(2,no.length);
    var morning = true;
    console.log(type, ref);
    if(type === 'CT' && parseInt(ref, 10)>25) morning = false;
    else if(type === 'DS' && parseInt(ref, 10)>20)  morning = false;
    else if(type === 'MK' && parseInt(ref, 10)>18)  morning = false;
    else if(type === 'DS' && parseInt(ref, 10)>23)  morning = false;
    return morning ? "Morning" : "Afternoon";
  }

  render() {
    
    return (
      <div >
        <Nav tabs style={{display: 'flex', justifyContent: 'center'}}>
          <NavItem className="link">
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              web content
            </NavLink>
          </NavItem>
          <NavItem className="link">
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              web design
            </NavLink>
          </NavItem>
          <NavItem className="link"> 
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              web marketing
            </NavLink>
          </NavItem>
          <NavItem className="link">
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              web programming
            </NavLink>
          </NavItem>
          
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col xs={0} md={1} lg={2}>
            
              </Col>
              <Col xs={12} md={10} lg = {8}>
                {this.candidate("content")}
              </Col>
              <Col xs={0} md={1} lg={2}>

              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col xs={0} md={1} lg={2}>

              </Col>
              <Col xs={12} md={10} lg = {8}>
                {this.candidate("design")}
              </Col>
              <Col xs={0} md={1} lg={2}>

              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col xs={0} md={1} lg={2}>
            
              </Col>
              <Col xs={12} md={10} lg = {8}>
                {this.candidate("marketing")}
              </Col>
              <Col xs={0} md={1} lg={2}>

              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col xs={0} md={1} lg={2}>
            
              </Col>
              <Col xs={12} md={10} lg = {8}>
                {this.candidate("programming")}
              </Col>
              <Col xs={0} md={1} lg={2}>

              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
