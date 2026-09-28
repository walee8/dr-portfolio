import { useState } from "react";
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { Container, Navbar, Nav, Button, Col, Row, Carousel, Card, Form } from "react-bootstrap";
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

function Testimonial(){
  return(
    <section id="testimonials" className="section">
      <Container>
        <h2 className="text-center my-5">Testimonials</h2>
        <Carousel data-bs-theme="light" className="my-5">
      <Carousel.Item>
        <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            She explained my test results without rushing and I finally understood my diabetes.
          </p>
          <footer className="blockquote-footer">
            "Rafique, <cite title="Source Title">patient since 2020"</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Every visit feels unhurried. She remembers the details of my mother's care too.
          </p>
          <footer className="blockquote-footer">
            "Farhana, <cite title="Source Title">patient since 2022"</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            The clinic is organised and she always answers my follow-up questions.
          </p>
          <footer className="blockquote-footer">
            "Karim,  <cite title="Source Title">patient since 2018"</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
      </Carousel.Item>
    </Carousel>
      </Container>
     </section>
  );
}
function Locations(){
  return(
    <section id="locations" className="section">
      <Container>
        <h2 className="text-center my-5">Our Locations</h2>
        <Row>
          <Col md={6}>
            <h3 className="fs-4 mb-3">Medix</h3>
            <p className="text-body-secondary">
              123 Main Street, Dhaka, Bangladesh
            </p>
            <a href="tel:0123456789">0123456789</a>
          </Col>
          <Col md={6}>
            <h3 className="fs-4 mb-3">Intensive Care</h3>
            <p className="text-body-secondary">
              456 Secondary Road, Chittagong, Bangladesh
            </p>
            <a href="tel:0123456789">0123456789</a>
          </Col>
    
        </Row>
      </Container>
      </section>
);
}

function AppointmentForm() {
  return (
    <section id="book" className="section">
      <Container>
        <h2 className="text-center my-5">Book an Appointment</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <h3>Book an Appointment</h3>
            <p>Choose a convenient time and date for your visit.</p>
          </Col>
          <Col md={6}>
            <Form className="p-4 border rounded">
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="tel" />  
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Label>Clinic</Form.Label>
                  <Form.Select>
                    <option>Medix</option>
                    <option>Intensive Care</option>
                  </Form.Select>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Label>Reason for Visit</Form.Label>
                  <Form.Select>
                    <option>General Checkup</option>
                    <option>Follow-up</option>
                  </Form.Select>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Label>Preferred Date</Form.Label>
                  <Form.Control type="date" />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Label>Time of day</Form.Label>
                  <Form.Select>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </Form.Select>
                </Col>

              </Row>
              <Button className="bg-info" type="submit">Request Appointment</Button>

            </Form>
          
          </Col>
        </Row>
      </Container>
      
      </section>

  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="text-center my-5">Contact Us</h2>
        <Row className="align-items-center">

          {/* Left Side */}
          <Col md={6}>
            <h2>Contact us</h2>

            <p>
              Have a question or need help? Send us a message and
              our team will get back to you soon.
            </p>

            <div className="contact-info">
              <p><strong>📍 Address:</strong> 123 Main Street, Chattogram</p>
              <p><strong>📞 Phone:</strong> +880 1234-567890</p>
              <p><strong>✉ Email:</strong> info@citycare.com</p>
              <p><strong>🕒 Hours:</strong> Sat - Thu, 9:00 AM - 8:00 PM</p>
            </div>
          </Col>

          {/* Right Side */}
          <Col md={6}>
            <Form className="p-4 border rounded">

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Label>Full name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your name"
                  />
                </Col>

                <Col md={6} className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Your email"
                  />
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Subject"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Write your message..."
                />
              </Form.Group>

              <Button className="bg-info" type="submit">
                Send message
              </Button>

            </Form>
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
        <Testimonial />
        <Locations />
        <AppointmentForm />
        <Contact />
      </main>
    </>
  );
}
