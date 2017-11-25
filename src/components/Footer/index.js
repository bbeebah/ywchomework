import React from 'react';
import {Nav, NavItem, Container } from 'reactstrap';
import './style.css';

function Footer () {
    return(
    <footer className="footer" style={{justifyContent: 'space-between'}}>
    <Container >
      <Nav justified>
        <NavItem >
          Y W C # 15
        </NavItem>
        <NavItem title="Item">
          Terms & Conditions
        </NavItem>
        <NavItem >
          powered by bbeebah

        </NavItem>
      </Nav>

      <div className="text-center small copyright">
        © bbeebah 2017
      </div>
    </Container>
  </footer>
    );

}

export default Footer;