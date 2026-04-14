import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myavatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WHAT I DO WITH <span className="purple">DATA</span>
            </h1>

           <p className="home-about-body">
  I work with <b className="purple">data</b> to uncover patterns, analyze trends, and generate insights.
  <br /><br />

  I’ve worked on projects like <b className="purple">war conflict analysis</b> and <b className="purple">campaign performance analysis</b>, where I explored how multiple factors influence outcomes and used statistical methods to understand relationships in data.
  <br /><br />

  I also analyzed <b className="purple">retail sales data</b> to identify trends, customer behavior, and key business insights.
  <br /><br />

  I use{" "}
  <i><b className="purple">Python, R, and SQL</b></i>{" "}
  for data cleaning, exploratory analysis, and visualization.
  <br /><br />

  I’m currently working on{" "}
  <a
    href="https://pawpaw-mu.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="purple"
    style={{ textDecoration: "none", fontWeight: "bold" }}
  >
    PawPaw
  </a>{" "}
  by analyzing publicly available data to understand market trends, demand patterns, and service opportunities.
</p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;