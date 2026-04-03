import React from "react";
import { Col, Row } from "react-bootstrap";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Git from "../../Assets/TechIcons/Git.svg"
import postman from "../../Assets/TechIcons/Postman.svg"
import { SiJupyter } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

  <Col xs={4} md={2} className="tech-icons">
    <img src={vsCode} alt="vsCode" className="tech-icon-images" />
    <div className="tech-icons-text">VS Code</div>
  </Col>

  <Col xs={4} md={2} className="tech-icons">
    <SiJupyter style={{ color: "#F37726", fontSize: "1.5em" }} />
        <div className="tech-icons-text">Jupyter</div>
  </Col>

  <Col xs={4} md={2} className="tech-icons">
    <img src={Git} alt="Git" className="tech-icon-images" />
    <div className="tech-icons-text">Git</div>
  </Col>

</Row>
  );
}

export default Toolstack;
