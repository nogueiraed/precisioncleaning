//precisioncleaning/FRONTEND/Components/Containers/header
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from "react";
import UserContext from '../Contexts/userContext';

export default function Header(props){
  const [user, setUser] = useContext(UserContext);

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}><h1>{props.text}</h1></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{ whiteSpace: 'nowrap' }}>
            Signed in as: {user.username} 
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}






