import React from "react";
import { Col } from "react-bootstrap";

const ColGroup = (props) => (
  <Col md={props.md}>
    <h5>{props.title}</h5>
    <ul className="no-bullet">{props.children}</ul>
  </Col>
);

export default ColGroup;
