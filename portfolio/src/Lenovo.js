import React from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";
import Footer from "./components/Footer";
import PortfolioHero from "./components/PortfolioHero";
import ColGroup from "./components/ColGroup";
import Figure from "./components/Figure";

const Lenovo = () => (
  <Container>
    <PortfolioHero
      PortfolioLink="lenovo"
      ImageLink="https://via.placeholder.com/1400x600"
      ImageAlt="Description"
      Headline="U.S. Census Bureau: Census Survey Explorer"
      Subheader="I built a web application to help data users find 130+ U.S. Census Bureau surveys and programs."
      Overview="My team wanted to create more engaging online courses geared toward small businesses. While we had a few courses available on the website, they existed only as text and embedded YouTube videos. We wanted to teach users in a more interactive way and build a better infrastructure for a learning management system. "
    />
    <Row>
      <ColGroup title="Team">
        <li>Work</li>
        <li>Playground</li>
        <li>Resume</li>
        <li>About</li>
      </ColGroup>
      <ColGroup title="Role">
        <li>Work</li>
        <li>Playground</li>
        <li>Resume</li>
        <li>About</li>
      </ColGroup>
      <ColGroup title="Time">
        <li>Work</li>
        <li>Playground</li>
        <li>Resume</li>
        <li>About</li>
      </ColGroup>
      <ColGroup title="Tools">
        <li>Work</li>
        <li>Playground</li>
        <li>Resume</li>
        <li>About</li>
      </ColGroup>
    </Row>
    <Row>
      <Figure
        ImageLink="https://via.placeholder.com/1400x600"
        ImageAlt=""
        ImageNum="1"
        ImageCaption="Notice how text-heavy this is! Who would want to read through that?"
      />
      <Figure
        ImageLink="https://via.placeholder.com/1400x600"
        ImageAlt=""
        ImageNum="1"
        ImageCaption="Notice how text-heavy this is! Who would want to read through that?"
      />
    </Row>
    <Row>
      <Col>
        <h3>Examining the old flow</h3>
        <p>
          Here is how a user selects and takes a course through Census Academy.
        </p>
      </Col>
    </Row>
    <Row>
      <Figure
        ImageLink="https://via.placeholder.com/1400x600"
        ImageAlt=""
        ImageNum="1"
        ImageCaption="Notice how text-heavy this is! Who would want to read through that?"
      />
    </Row>
    <Footer />
  </Container>
);

export default Lenovo;
