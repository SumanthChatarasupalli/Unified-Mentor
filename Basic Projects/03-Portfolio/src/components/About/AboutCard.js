import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sumanth</span>
             from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently pursuing my BTech in Computer Science Engineering at NIT Patna.
            <br />
            I have completed my internship as a Machine Learning Intern at EISYSTEMS SERVICES.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing outdoor games like cricket,volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> and spending some time with parent
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code is like humor. When you have to explain it, it’s bad."
          </p>
          <footer className="blockquote-footer">Sumanth</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;