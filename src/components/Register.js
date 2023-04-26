import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerdUser, setRegisterdUser] = useState("");

  const endpoint = useContext(EnvironmentContext);
  const url = `${endpoint}/register`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await result.json();
    setRegisterdUser(data.message);
  };

  return (
    <>
      <h2>Register</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
        {registerdUser ? (
          <p className="text-success">{`Registered ${registerdUser}`}</p>
        ) : (
          <p className="text-danger">No registered user</p>
        )}
      </Form>
    </>
  );
};

export default Register;
