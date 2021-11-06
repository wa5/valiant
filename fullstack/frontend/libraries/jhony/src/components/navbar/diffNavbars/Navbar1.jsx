import React from 'react'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Navbar1() {
    return (
        <div>
            <Navbar bg="warning" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home"><Link to="/home">Home</Link>     </Nav.Link>
        <Nav.Link href="#link"><Link to="/single">single page</Link>  </Nav.Link>
        <Nav.Link href="#link"><Link to="/about">about</Link>  </Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Navbar1
