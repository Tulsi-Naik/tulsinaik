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
  I work with <b className="purple">data</b> to find patterns and understand trends.
  <br /><br />

  I’ve worked on a <b className="purple">retail clothing analysis</b> project, exploring sales, customer behavior, and key trends.
  <br /><br />

I use{" "}
<i><b className="purple"> Python, R, and SQL </b></i>
  to clean, explore, and analyze data.
  <br /><br />
Currently, I&apos;m building a{" "}
<a
  href="https://pawpaw-mu.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="purple"
  style={{ textDecoration: "none", fontWeight: "bold" }}
>
  dog walking and grooming app (PawPaw)
</a>{" "}
and planning data analysis for its upcoming <b className="purple">e-commerce feature</b>.
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