import Login from "./Login";
import Register from "./Register";
import { Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Row>
      <Col xs={12} sm={12} md={6} lg={6}>
        <Register />
      </Col>
      <Col xs={12} sm={12} md={6} lg={6}>
        <Login />
      </Col>
    </Row>
  );
};

export default Home;
