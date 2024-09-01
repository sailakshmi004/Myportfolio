import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard=() =>{
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br/>
            Hi Everyone, I am <span className="purple">SaiLakshmi </span>
            from <span className="purple"> Janardhanavaram, India.</span>
            <br />
            I am currently pursuing my Btech In the stream Information Technology in Bhimavaram.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">SaiLakshmi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;