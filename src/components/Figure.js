import React from "react";
import { Col } from "react-bootstrap";
import FigureImage from "react-bootstrap/esm/FigureImage";
import FigureCaption from "react-bootstrap/esm/FigureCaption";

const Figure = (props) => (
  <Col md={true}>
    <FigureImage src={props.ImageLink} alt={props.ImageAlt} />
    <FigureCaption>
      <span class="imageNum">{props.ImageNum}</span>
      {" " + props.ImageCaption}
    </FigureCaption>
  </Col>
);

export default Figure;
