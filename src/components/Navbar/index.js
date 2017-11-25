import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,  Input } from 'reactstrap';
import './style.css';
import logo from '../App/logo.png';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleChange(e){
      const searchKey = e.target.value;
      this.props.searching(searchKey);
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md" className="navbar" fixed={'top'} >
          <NavbarBrand href="/"> <img src={logo} className="nav-logo" alt="logo" /> </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              
              <NavItem>     
                <Input placeholder="search..." value={this.props.searchKey} onChange={this.handleChange.bind(this)}/>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}