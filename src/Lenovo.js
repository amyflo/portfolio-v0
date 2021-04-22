import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/Footer";
import PortfolioHero from "./components/PortfolioHero";
import ColGroup from "./components/ColGroup";
import Figure from "./components/Figure";
import PortfolioItem from "./components/PortfolioItem";
import SecondaryItem from "./components/SecondaryItem";
import Blockquote from "./components/Blockquote";
import Data from "./components/Data";
import Fade from "react-reveal/Fade";

const Lenovo = () => (
  <div>
    <Container>
      <Fade bottom>
        <PortfolioHero
          PortfolioLink="lenovo"
          ImageLink="https://via.placeholder.com/1400x600"
          ImageAlt="Description"
          Headline="U.S. Census Bureau: Census Survey Explorer"
          Subheader="I built a web application to help data users find 130+ U.S. Census Bureau surveys and programs."
          Overview="My team wanted to create more engaging online courses geared toward small businesses. While we had a few courses available on the website, they existed only as text and embedded YouTube videos. We wanted to teach users in a more interactive way and build a better infrastructure for a learning management system. "
        />
        <Row>
          <ColGroup title="Team" num="3">
            <li>Amy Lo, UX Design, UX Research</li>
            <li>Elliott Tran, UX Research</li>
            <li>Alexandra Barker, Program Manager</li>
            <li>Mary Leisenring, Instructional Design</li>
            <li>Anthony Calabrese, Project Manager</li>
          </ColGroup>

          <ColGroup title="Role" num="3">
            <li>UX Design</li>
            <li>User Research</li>
            <li>Information Architecture</li>
            <li>Competitive Analysis</li>
          </ColGroup>

          <ColGroup title="Tools">
            <li>Sketch</li>
            <li>InVision</li>
            <li>Miro</li>
            <li>U.S. Web Design System</li>
          </ColGroup>
          <ColGroup title="Time">
            <li>June 2020 - August 2020</li>
            <li>10 weeks</li>
          </ColGroup>
        </Row>
        <Row>
          <Col>
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
            <PortfolioItem
              headline="Examining the old flow"
              text="Here is how a user selects and takes a course through Census Academy."
            />
            <Figure
              ImageLink="https://via.placeholder.com/1400x600"
              ImageAlt=""
              ImageNum="1"
              ImageCaption="Notice how text-heavy this is! Who would want to read through that?"
            />
            <PortfolioItem
              headline="Early Research"
              text="Before we jumped into designing, we wanted to understand the impact of 
          COVID-19 on small businesses and how they use our data tools to make business decisions. 
          Luckily, data is not hard to find here at the Census!"
            />
            <Figure
              ImageLink="https://via.placeholder.com/1400x600"
              ImageAlt=""
              ImageNum="1"
              ImageCaption="Notice how text-heavy this is! Who would want to read through that?"
            />

            <SecondaryItem
              headline="Too much burden on the user"
              text="Our target users were small business owners impacted by COVID-19. There were 
          multiple pain points throughout the process of discovering, selecting, and taking a 
          course it that created friction in the learning process."
            />
            <Figure
              ImageLink="https://via.placeholder.com/1400x600"
              ImageAlt=""
              ImageNum="1"
              ImageCaption="Notice how text-heavy this is! Who would want to read through that?"
            />
            <SecondaryItem
              headline="The pandemic poses a threat to small businesses"
              text="Any design solution we created had to reduce the barriers to entry for
          our users, who already had high stress and pressure from the pandemic."
            />
            <Blockquote
              quote="[COVID-19] was affecting our business in March 
          and dropped our business by about 70%... If we have a 
          second wave, I'm concerned that not just myself, but 
          many of my peers will be in a very challenging position."
              source="- Participant X"
            />
          </Col>
          <Row>
            <Col>
              <Data
                number="77.4%"
                text="of businesses nationwide have been negatively affected by the COVID-19 pandemic"
                source="- Small Business Pulse Survey"
              />
            </Col>
            <Col>
              <Data
                number="30.3%"
                text="of businesses have had a large negative effect by the COVID-19
              pandemic"
                source="- Small Business Pulse Survey"
              />
            </Col>
          </Row>
        </Row>
        <Row>
          <Col>
            <SecondaryItem
              headline="Small businesses and data solutions go hand in hand"
              text="We also researched the existing data landscape for small businesses. 
        When used effectively, data can be extremely powerful for finding new customer 
        leads, measuring sales, and understanding a local market."
            />
            <Blockquote
              quote="[Before the pandemic] we started working with a bunch of people who've 
        essentially gone out of business, like brick and mortar stores. Most of them 
        are non-existent. Our future was always going to be online."
              source="- Participant X"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Data
              number="67%"
              text="of small businesses are spending more than $10K a year on analytics"
              source="- Small Business Trends"
            />
          </Col>
          <Col>
            <Data
              number="83%"
              text="of user research participants rely on data analytic tools to make business decisions"
              source="- Results from our user testing"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Despite these benefits, there is a high barrier to entry for using
              data. Through our user interviews, we learned there were two
              common reasons why: data tools were 1) expensive and 2) difficult
              to use.
            </p>
            <p>
              The Census Bureau already offers{" "}
              <a
                className="textLink"
                href="https://www.census.gov/topics/business-economy/small-business/data/data-tools.html"
              >
                11 free data tools
              </a>{" "}
              that cater to small businesses. Our goal was to make them easier
              to learn.
            </p>
            <SecondaryItem
              headline="Understanding the existing data education market"
              text="We examined how competitors in the e-learning space structured their 
          learning management systems to support interactive 
          learning and focused on four platforms to guide our discovery."
            />
            <Figure
              ImageLink="https://via.placeholder.com/1400x600"
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

export default Lenovo;
