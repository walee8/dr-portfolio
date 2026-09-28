import { useState } from "react";
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { Container, Navbar, Nav, Button, Col, Row } from "react-bootstrap";
import HeroImg from "./Assets/Hero.png";
import AboutImg from "./Assets/About.png";

const Doctor = {
  name: "Dr. John Doe",
  tagline: "Your trusted healthcare partner",
};

const CERTS = [
  ["Board Certified, Internal Medicine", "2014 · National Board of Medical Specialties"],
  ["MD, Internal Medicine", "2014 · National Medical University"],
  ["Advanced Cardiac Life Support (ACLS)", "Renewed 2024 · Heart Care Association"],
  ["Certificate in Diabetes Management", "2017 · Diabetes Education Institute"],
  ["MBBS", "2010 · Government Medical College"],
];

function TopNav() {
  return (
    <Navbar expand="lg" sticky="top" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Brand href="#home">
          {Doctor.name}
        </Navbar.Brand>

        
        <Navbar.Toggle aria-controls="main-navbar" />

        
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#locations">Locations</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

            <Button
              href="#book"
              className="ms-lg-2 mt-2 mt-lg-0 bg-dark"
            >
              Book a visit
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function Hero(){
  return (
    <Container className="hero py-5 my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h1>
            {Doctor.name}
          </h1>
          <p className="lead">
            {Doctor.tagline}
          </p>
          <Button size="lg" href="#book" className="btn btn-dark">
            Book an Appointment
          </Button>
        </Col>

        <Col md={6}>
          <img src={HeroImg} alt="Doctor" className="img-fluid rounded" />
        </Col>
      </Row>
    </Container>
    
  );
}

function About() {
  return(
    <section id="about" className="section">
      <Container>
        <h2 className="text-center my-5">About Me</h2>
        <Row>
          <Col md={6}>
          <img src={AboutImg} alt="Doctor" className="img-fluid rounded mb-4 mb-md-0" />
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <p className="lead">
              I became a physician because I wanted to be the doctor who connects the dots: the tired
              patient with high blood sugar, the worried parent with a long medication list.
            </p>
            <p className="lead">
              My approach is simple. I listen first, explain every result and decision in plain words,
              and build a plan you can keep up with. I work closely with specialists when your care
              needs more than one pair of eyes.
            </p>
          </Col>
        </Row>
      </Container>

    </section>
  );
}
function Skills(){
  return(
    <section id="skills" className="section">
      <Container>
        <h2 className="text-center my-5">Skills and Certifications</h2>
        <Row>
          <Col md={6}>
          <h3 className="fs-4 mb-3">Areas of Expertise</h3>
          <Stack direction="horizontal" gap={2} className="flex-wrap">
      <Badge pill bg="info" className="fs-6">
        Diabetes management
      </Badge>
      <Badge pill bg="info" className="fs-6">
        Hypertension & cholesterol
      </Badge>
      <Badge pill bg="info" className="fs-6">
        Preventive health screening
      </Badge>
      <Badge pill bg="info" className="fs-6">
        Chronic illness follow-up
      </Badge>
      <Badge pill bg="info" className="fs-6">
        Elderly care
      </Badge>
      <Badge pill bg="info" className="fs-6">
        ECG interpretation
      </Badge>
      <Badge pill bg="info" className="fs-6">
        Second opinions
      </Badge>
    </Stack>
          </Col>

          <Col md={6}>
          <h3 className="fs-4 mb-3">Certifications</h3>
          <ul>
              {CERTS.map(([title, detail]) => (
                <li key={title}>
                  <strong className="d-block">{title}</strong>
                  <span className="text-body-secondary">{detail}</span>
                </li>
              ))}
            </ul>
          </Col>

        </Row>

      </Container>
    </section>
  );
}






export default function App() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  );
}
