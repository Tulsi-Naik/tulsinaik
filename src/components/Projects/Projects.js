import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import salesImg from "../../Assets/Projects/brightthread_sales.png";
import warImg from "../../Assets/Projects/warImg.png";
import campImg from "../../Assets/Projects/campImg.png";
// (optional: add images later for war & campaign if you want)

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work</strong>
        </h1>
        <p style={{ color: "white" }}>
          Projects focused on data analysis, insights, and real-world patterns.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* WAR PROJECT */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salesImg} // replace later if you add war image
              isBlog={false}
              title="War Conflict Analysis"
              description="Explored a war conflict dataset using Python (Pandas) to understand factors influencing impact and outcomes. Moved beyond single-variable analysis by combining multiple factors to uncover deeper patterns. Developed a custom impact metric using deaths, economic loss, and refugee data, and found that combined factors like terrain and climate provided stronger insights than individual variables."
              ghLink="https://github.com/Tulsi-Naik/war-conflict-analysis"
            />
          </Col>

          {/* CAMPAIGN PROJECT */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salesImg} // replace later if you add image
              isBlog={false}
              title="Campaign Performance Analysis"
              description="Analyzed marketing campaign data from Facebook and AdWords to study the relationship between clicks and conversions. Applied statistical testing and simple regression to understand performance differences. Evaluated campaign efficiency using conversion rate and cost per conversion, helping identify which platform delivered better results."
              ghLink="https://github.com/Tulsi-Naik/campaign-performance-analysis"
            />
          </Col>

          {/* SALES PROJECT */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salesImg}
              isBlog={false}
              title="Retail Sales Analysis"
              description="Analyzed retail sales data to identify trends, category performance, and customer behavior. Focused on data cleaning, exploratory analysis, and extracting actionable insights to support business decision-making."
              ghLink="https://github.com/Tulsi-Naik/brightthreads-sales-analysis"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;