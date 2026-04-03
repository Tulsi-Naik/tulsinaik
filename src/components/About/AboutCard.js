import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
<p style={{ textAlign: "justify" }}>
  I’m <span className="purple">Tulsi Naik</span>, based in{" "}
  <span className="purple">Kolhapur, India</span>, currently pursuing an <span className="purple">MCA</span>.
  <br /><br />

  I work with <span className="purple">data</span> because I don’t like making decisions blindly. I’d rather understand what’s actually going on first, and data helps me do that.
  <br /><br />

  I tend to look for patterns, question things a bit, and figure out what makes the most sense instead of just going with assumptions. That’s what got me into data analysis in the first place.
  <br /><br />

  I’ve been working with different datasets and plan to keep building on that as I go.
</p>
          {/* <footer className="blockquote-footer">Tulsi</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;