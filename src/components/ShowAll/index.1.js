import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Table, Container, Row, Col } from 'reactstrap';

import Navbar from '../Navbar';
import Announce from '../Announce';
import Footer from '../Footer';

import './style.css';

const API = 'https://ywc15.ywc.in.th/api/interview';
// const DEFAULT_QUERY = 'redux';

class ShowAll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    fetch(API ) // + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ list: data }));
  }
  render() {
    const { list } = this.state;
    list.sort(function(a,b){
      var x = a.interviewRef < b.interviewRef? -1:1; 
      return x; 
    })
    return (
      <div>
        <div style={{height: '100px'}}>
          
        </div>
        <Navbar />
        <Announce />
        <Container>
          <Row>
            <Col xs={12} lg={4}>
              <div className="Each-table">
                <Table >
                    <thead>
                      <tr>
                        <th colSpan={2}>
                          PROGRAMMING
                        </th>
                      </tr>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list.map((li, i) => {
                          if(li.major === "programming")
                          { 
                            return(<tr>
                              <th scope="row" key={i}> {li.interviewRef} </th>
                              <td> {li.firstName} {li.lastName} </td>
                            </tr>
                          )}
                        }
                        
                      )}
                    
                    </tbody>
                </Table>
              </div>
            </Col>
            <Col xs={12} lg={4}>
            <Table >
                  <thead>
                    <tr>
                      <th colSpan={2}>
                        MARKETING
                      </th>
                    </tr>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((li, i) => {
                        if(li.major === "marketing")
                        { 
                          return(<tr>
                            <th scope="row" key={i}> {li.interviewRef} </th>
                            <td> {li.firstName} {li.lastName} </td>
                          </tr>
                        )}
                      }
                      
                    )}
                  
                  </tbody>
              </Table>
            </Col>
            <Col xs={12} lg={4}>
              
                <Table >
                  <thead>
                    <tr>
                      <th colSpan={2}>
                        DESIGN
                      </th>
                    </tr>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((li, i) => {
                        if(li.major === "design")
                        { 
                          return(<tr>
                            <th scope="row" key={i}> {li.interviewRef} </th>
                            <td> {li.firstName} {li.lastName} </td>
                          </tr>
                        )}
                      }
                      
                    )}
                  
                  </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
        <Footer/>

      </div>
    );
  
  }

}

export default ShowAll;