import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import salesImg from "../../Assets/Projects/brightthread_sales.png";
import pawpawImg from "../../Assets/Projects/pawpaw.png"
import jewelleryImg from "../../Assets/Projects/jewellery.png"
import healthImg from "../../Assets/Projects/health.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
       <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

  {/* Data Project */}
  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={salesImg}
      isBlog={false}
      title="Retail Sales Analysis"
      description="Analyzed retail sales data to identify trends, category performance, and customer patterns. Focused on data cleaning, exploration, and deriving insights to support decision-making."
      ghLink="https://github.com/Tulsi-Naik/brightthreads-sales-analysis"
    />
  </Col>

  {/* Dog App */}
  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={pawpawImg} // replace later if you get screenshot
      isBlog={false}
      title="PawCare – Pet Care Platform"
      description="Built a full-stack pet care booking platform where users can request services and caregivers can manage bookings. Includes authentication, payments, notifications, and admin features."
      ghLink="https://github.com/Tulsi-Naik/pawpaw"
      demoLink="https://pawpaw-mu.vercel.app/"
    />
  </Col>

  {/* Jewellery App */}
  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={jewelleryImg} // replace later
      isBlog={false}
      title="Multi-Vendor Jewellery App"
      description="Developed a multi-vendor jewellery platform with separate databases per vendor. Implemented APIs, notifications, and data handling to support business operations and reporting."
      ghLink="https://github.com/Tulsi-Naik/jewel-acad-client"
      demoLink="https://jewelbook.vercel.app/"
    />
  </Col>

  {/* Healthcare App */}
  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={healthImg} // replace later
      isBlog={false}
      title="Healthcare Tracking App"
      description="Built a web app to track food intake and calorie data. Included dashboards, searchable inputs, and visualizations to represent user data clearly."
      ghLink="https://github.com/Tulsi-Naik/health_is_wealth"
    />
  </Col>

</Row>
      </Container>
    </Container>
  );
}

export default Projects;
