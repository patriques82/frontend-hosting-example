import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Navbar = () => {
  const token = cookies.get("TOKEN");

  const logoutHandler = () => {
    cookies.remove("TOKEN", { path: "/" });
    cookies.remove("USER_EMAIL", { path: "/" });
    window.location.href = "/"; // force refresh
  };

  return (
    <Row>
      <Col className="text-center">
        <h1>Frontend</h1>
        <section id="navigation">
          <Link to="/">Home</Link>
          <Link to="/free">Free</Link>
          {token && <Link to="/dashboard">Dashboard</Link>}
        </section>
        <Button onClick={logoutHandler}>Logout</Button>
      </Col>
    </Row>
  );
};

export default Navbar;
