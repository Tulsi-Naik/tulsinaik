import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  SiPython,
  SiR, 
  SiMysql, 
  SiPandas, 
  SiNumpy, 
  SiTableau,
  SiMicrosoftexcel
} from "react-icons/si";
import { FaChartBar } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* Python */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPython size={32} color="#3776AB" />
        <div className="tech-icons-text">Python</div>
      </Col>

      {/* R */}
      <Col xs={4} md={2} className="tech-icons">
        <SiR size={32} color="#276DC3" />
        <div className="tech-icons-text">R</div>
      </Col>

      {/* SQL */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql size={32} color="#00758F" />
        <div className="tech-icons-text">SQL</div>
      </Col>

      {/* Excel */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel size={32} color="#1D6F42" />
        <div className="tech-icons-text">Excel</div>
      </Col>

      {/* Pandas */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas size={32} color="#E70488" />
        <div className="tech-icons-text">Pandas</div>
      </Col>

      {/* NumPy */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy size={32} color="#4D77CF" />
        <div className="tech-icons-text">NumPy</div>
      </Col>

      {/* Matplotlib (clean neutral icon) */}
      <Col xs={4} md={2} className="tech-icons">
        <FaChartBar size={32} color="#B0B3C6" />
        <div className="tech-icons-text">Matplotlib</div>
      </Col>

      {/* Tableau */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau size={32} color="#E97627" />
        <div className="tech-icons-text">Tableau</div>
      </Col>

    </Row>
  );
}

export default Techstack;