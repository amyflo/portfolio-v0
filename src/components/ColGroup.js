import React from "react";
import { Col } from "react-bootstrap";

const ColGroup = (props) => (
  <Col md={3}>
    <h5>{props.title}</h5>
    <ul className="no-bullet">{props.children}</ul>
  </Col>
);

export default ColGroup;
