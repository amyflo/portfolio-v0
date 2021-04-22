import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./components/style.css";
import Figure from "./components/Figure";
import Footer from "./components/Footer";
import Blockquote from "./components/Blockquote";
import Fade from "react-reveal/Fade";

const About = () => (
  <div>
    <Container>
      <Row>
        <Col>
          {" "}
          <Fade top>
            <h1 className="my-4">Hi, my name is Amy Lo!</h1>
            <Blockquote quote="I push my pixels where they can count the most, for the people who need a voice the most." />
          </Fade>
          <Fade bottom>
            <Figure
              ImageLink="https://via.placeholder.com/1400x700"
              ImageAlt=""
              ImageNum="1"
              ImageCaption="Notice how text-heavy this is! Who would want to read through that?"
            />
          </Fade>
        </Col>
      </Row>

      <Fade bottom>
        <Row>
          <Col lg={5}>
            <h2>
              I’m an L.A. girl with big dreams – I’m discovering mine studying
              computer science and psychology at Stanford.
            </h2>
            <p>
              During my first year at Stanford, I took courses in programming,
              neuroscience, and social psychology that made me wonder:
            </p>
            <p>
              How can we use our understanding of the mind to impact what
              happens on the code-level?
            </p>
            <p>
              Those questions eventually led me to the product design field.
              There, I'm discovering how I can make impact and make lives easier
              through technology.
            </p>
            <h3>
              I pride myself on bringing ethics and a deep love of research to
              my work.
            </h3>
            <p>
              I care about what happens outside of the screen. In my free time,
              I work on bringing accessible, open data to students with the
              Stanford Open Data Project. I also researched the last decade of
              tech culture with the Tech History Project.
            </p>
          </Col>
          <Col lg={2} />
          <Col lg={5}>
            <Figure
              ImageLink="https://via.placeholder.com/1400x700"
              ImageAlt=""
              ImageNum="1"
              ImageCaption="I'm eating a bagel in this pic!"
            />
            <Figure
              ImageLink="https://via.placeholder.com/1400x700"
              ImageAlt=""
              ImageNum="1"
              ImageCaption="Notice how text-heavy this is! Who would want to read through that?"
            />
            <Figure
              ImageLink="https://via.placeholder.com/1400x700"
              ImageAlt=""
              ImageNum="1"
              ImageCaption="Notice how text-heavy this is! Who would want to read through that?"
            />
          </Col>
        </Row>
      </Fade>
    </Container>

    <Footer />
  </div>
);

export default About;
