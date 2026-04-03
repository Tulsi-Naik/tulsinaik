import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "20px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4">
        My <strong className="purple">GitHub Activity</strong>
      </h1>

      <p style={{ textAlign: "center", maxWidth: "600px" }}>
I put my work on GitHub as I go, so I can see what I’ve been doing and how I’m improving.      </p>

      <GitHubCalendar
        username="Tulsi-Naik"
        blockSize={18}
        blockMargin={5}
        color="#c084f5"
        fontSize={14}
      />
    </Row>
  );
}

export default Github;