import React from "react";
import FigureImage from "react-bootstrap/esm/FigureImage";
import FigureCaption from "react-bootstrap/esm/FigureCaption";
import Fade from "react-reveal/Fade";

const Figure = (props) => (
  <Fade bottom>
  <div className="my-3">
    <FigureImage src={props.ImageLink} alt={props.ImageAlt} />
    <FigureCaption>
      <span class="imageNum">{props.ImageNum}</span>
      {" " + props.ImageCaption}
    </FigureCaption>
  </div>
  </Fade>
);

export default Figure;
