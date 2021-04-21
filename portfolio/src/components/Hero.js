import React from "react";
import { Jumbotron, Button, Image, Container, Row, Col } from "react-bootstrap";
import "./style.css";

const Hero = (props) => (
  <div>
    <Jumbotron bg="dark" variant="dark">
      <Container>
        <Row>
          <Col>
            <h5>MY MANIFESTO</h5>
            <h1>
              I push my pixels where they can count the most, for the people who
              need a voice the most.
            </h1>
            <Button className="custom-btn" href={props.ButtonLink}>
              About me
            </Button>
            <Button className="custom-btn" href={props.ButtonLink}>
              Meet with me
            </Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  </div>
);

export default Hero;
