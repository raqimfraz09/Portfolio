import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Raqim Fraz </span>
            from <span className="purple"> Patna, India.</span>
            <br />
            Currently Graduated from Noida Institute of Engineering and Technology.
            <br />
            I have completed  Bachelor of Technology with Honours in Infromation Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Techs.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Raqim</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
