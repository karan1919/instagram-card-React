import React from "react";
import Post from "./components/Post";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <div id="root">
      <Container fluid>
        <Row>
          <Col>
            <Post />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
