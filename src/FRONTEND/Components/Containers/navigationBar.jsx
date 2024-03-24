//precisioncleaning/FRONTEND/Components/Containers/navigationBar

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from 'react';
import UserContext from '../Contexts/userContext';

export default function  NavigationBar(props) {
  const [user, setUser] = useContext(UserContext);

    return (
        <>
          {[false].map((expand) => (
            <Navbar key={expand} className="bg-body-tertiary mb-3" >
              <Container fluid>
                <LinkContainer to="/">  
                  <Navbar.Brand>Home</Navbar.Brand>
                </LinkContainer>
                           
                <LinkContainer to="/Dw">
                  <Navbar.Brand>Daily Worksheet</Navbar.Brand>
                </LinkContainer>
                
                <LinkContainer to="/">
                  <Navbar.Brand onClick={() => {setUser({user: '', logged: false})}}>
                  Logout
                  </Navbar.Brand>
                </LinkContainer> 
                
                
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link to="/"></Nav.Link>
                      <Nav.Link ></Nav.Link> 
                                          
                      <NavDropdown
                        title="" //title name for drowpdown box - it will label it. 
                        id={`offcanvasNavbarDropdown-expand-${expand}`}>
                        
                        <LinkContainer to="/">
                          <NavDropdown.Item >Test 1</NavDropdown.Item>
                        </LinkContainer>

                        <LinkContainer to="/">
                          <NavDropdown.Item >Test 2</NavDropdown.Item>
                        </LinkContainer>
                        
                        <NavDropdown.Divider />
                        <LinkContainer to="/">
                          <NavDropdown.Item >Test3</NavDropdown.Item>
                        </LinkContainer>
                      </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </>
      );
    }