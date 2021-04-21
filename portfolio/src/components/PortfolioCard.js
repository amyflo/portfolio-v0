import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Image, Card, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import FigureCaption from "react-bootstrap/esm/FigureCaption";

const PortfolioCard = (props) => (
  <Fade bottom>
      <LinkContainer to={"/" + props.PortfolioLink}>
        <div className="mb-5">
          <h5 style={{textTransform: "uppercase"}} to={"/" + props.PortfolioLink} className="cardTitle">
            {props.Headline}
          </h5>
          <p>{props.Subheader}</p>
          
          <Card className="my-2">
            <Image src={props.ImageLink} alt={props.ImageAlt} fluid />
            <Card.ImgOverlay />
          </Card>
          <FigureCaption>UI/UX</FigureCaption>
          
        </div>
      </LinkContainer>
      
  </Fade>
);

export default PortfolioCard;
