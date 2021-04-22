import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PortfolioCard from "./components/PortfolioCard";

const App = () => (
  <div>
    <Hero
      ImageLink="https://via.placeholder.com/720x300"
      ButtonLink="https://calendly.com/amyflo/checkin"
    />
    <main className="py-5">
      <Container>
        <PortfolioCard
          PortfolioLink="lenovo"
          ImageLink="https://via.placeholder.com/300x100"
          ImageAlt="Description"
          Headline="Lenovo"
          Subheader="Researching and analyzing user behavior, page traffic, and content for the Worldwide eCommerce team."
        />
        <PortfolioCard
          PortfolioLink="slack"
          ImageLink="https://via.placeholder.com/300x100"
          ImageAlt="Description"
          Headline="Slack Calls"
          Subheader="User research to reimagine voice and video calls for Slack"
        />
        <PortfolioCard
          PortfolioLink="censussurveys"
          ImageLink="https://via.placeholder.com/300x100"
          ImageAlt="Description"
          Headline="U.S. Census Bureau"
          Subheader="I built a web application to help data users find 130+ U.S. Census Bureau surveys and programs."
        />
        <PortfolioCard
        PortfolioLink="censusacademy"
          ImageLink="https://via.placeholder.com/300x100"
          ImageAlt="Description"
          Headline="Census Academy"
          Subheader="Envisioning data education courses for the Census Academy team with the U.S. Census Bureau and Coding it Forward."
        />
        <Row>
          <Col sm={12} lg={6}>
            <PortfolioCard
            PortfolioLink="campaigns"
              ImageLink="https://via.placeholder.com/300x100"
              ImageAlt="Description"
              Headline="50+1 Strategies"
              Subheader="Creating for 20+ political campaigns in 2020."
            />
          </Col>
          <Col sm={12} lg={6}>
            <PortfolioCard
            PortfolioLink="c4c"
              ImageLink="https://via.placeholder.com/300x100"
              ImageAlt="Description"
              Headline="Commissions for Change"
              Subheader="Raising $37k for Black Lives Matter through social media."
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12} lg={6}>
            <PortfolioCard
            PortfolioLink="opendata"
              ImageLink="https://via.placeholder.com/300x100"
              ImageAlt="Description"
              Headline="Open Data Campus"
              Subheader="I built a website about open data for colleges."
            />
          </Col>
          <Col sm={12} lg={6}>
            <PortfolioCard
            PortfolioLink="play"
              ImageLink="https://via.placeholder.com/300x100"
              ImageAlt="Description"
              Headline="Playground"
              Subheader="An archive of projects made just for fun."
              Text="User experience"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </main>
  </div>
);

export default App;
