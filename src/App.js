import React from "react";
//import Counter from "./components/Counter";
// import Latest from "./components/Latest";
// import Navba from "./components/Navbar";
//import ArticleData from "./components/data";
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
