import { useState, useEffect, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import Cookies from "universal-cookie";

import EnvironmentContext from "./EnvironmentContext";

const cookies = new Cookies();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const endpoint = useContext(EnvironmentContext);
  const url = `${endpoint}/register`;

  useEffect(() => {
    const userEmail = cookies.get("USER_EMAIL");
    setUser(userEmail);
  }, []);

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
    const { data, token } = await result.json();
    cookies.set("TOKEN", token);
    cookies.set("USER_EMAIL", data.email);
    window.location.href = "/"; // force refresh
  };

  return (
    <>
      <h2>Login</h2>
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
          Login
        </Button>
        {user ? (
          <p className="text-success">{`Logged in as ${user}`}</p>
        ) : (
          <p className="text-danger">No logged in user</p>
        )}
      </Form>
    </>
  );
};

export default Login;
