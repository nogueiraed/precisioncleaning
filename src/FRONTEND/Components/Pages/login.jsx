import { Container, Form, Button } from "react-bootstrap";
import UserContext from "../Contexts/userContext";
import { useContext, useState } from "react";

export default function Login(props) {
  const [user, setUser] = useContext(UserContext);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function checkCredentials(){
    if (userName === 'admin' && password === '0000')
        setUser({
          username: userName,
          logged: true
        })
  };



    return (
      <Container className="container col-3 p-3 mb-2 ">
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>User:</Form.Label>
                <Form.Control
                type="text"
                id="userName"
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                />
                <Form.Text className="text-muted">Do not share your login</Form.Text>
            </Form.Group>
  
            <Form.Group className="mb-3">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button 
              variant="primary" 
              type="button"
              onClick={() => checkCredentials()}
              >
                Login
            </Button>
        </Form>
      </Container>
    );
  }