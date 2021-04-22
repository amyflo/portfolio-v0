import React from "react";
import {Row, Button, Container } from "react-bootstrap";
import ColGroup from "./ColGroup";

const Footer = () => (
  <footer>
    <Container className="py-5">
    <Row>
    <ColGroup title="Amy Lo">
      <p>You made it here! Let's get in touch.</p>
      <Button
        className="custom-btn"
        href="https://calendly.com/amyflo/checkin?month=2021-04"
      >
        Meet with me
      </Button>
    </ColGroup>
    <ColGroup title="Site Map">
      <li>Work</li>
      <li>Playground</li>
      <li>Resume</li>
      <li>About</li>
    </ColGroup>
    <ColGroup title="Site Map">
      <li>Work</li>
      <li>Playground</li>
      <li>Resume</li>
      <li>About</li>
    </ColGroup>
    <ColGroup title="Site Map">
      <li>Work</li>
      <li>Playground</li>
      <li>Resume</li>
      <li>About</li>
    </ColGroup>
    </Row>
    </Container>
  </footer>
);

export default Footer;
