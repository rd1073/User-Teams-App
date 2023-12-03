import React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
 import NavbarText from 'react-bootstrap/esm/NavbarText';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import { SiTeamspeak } from "react-icons/si";

 
function Navbarr() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">User Teams App</Navbar.Brand>
         

        <NavbarText className="mx-auto">
           
        </NavbarText>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      
      <Badge bg="secondary">{10}<i class="bi bi-amd"></i></Badge>
      <SiTeamspeak />

      </Dropdown.Toggle>

      <Dropdown.Menu>
        <span>Team is empty!</span>
         
      </Dropdown.Menu>
    </Dropdown>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
