import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pglife from "../../Assets/Projects/PG Life.png";
import raktdaan from "../../Assets/Projects/RaktDaan.jpg";
import UserCard from "../../Assets/Projects/User Card.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio"
              description="I created a personal portfolio website using ReactJS, showcasing my skills, projects. The site features a clean and responsive design, with sections for an introduction, projects, education, and contact information. ReactJS allowed me to build interactive components, such as project carousels and animated navigation, ensuring a smooth user experience. The portfolio serves as a platform to highlight my professional journey and connect with potential employers or collaborators."
            // ghLink="https://github.com/soumyajit4419/Chatify"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={UserCard}
              isBlog={false}
              title="User Card"
              description="This project is a User Information Fetcher web application that dynamically fetches and displays user profiles from an external API. The webpage is structured with HTML, styled using CSS, and made interactive with JavaScript."
              ghLink="https://github.com/raqimfraz09/User-card-grid-layout"
              demoLink="https://userinfofetch.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pglife}
              isBlog={false}
              title="PG LIFE"
              description="I developed an E-Commerce website named PG-LIFE, tailored for students seeking accommodation in major cities like New Delhi, Bangalore, Mumbai, Hyderabad, Greater Noida, and Pune. The platform, built with HTML, CSS, JavaScript, and Bootstrap, is fully responsive and user-friendly, ensuring easy access across all devices."
              ghLink="https://github.com/raqimfraz09/PG-Life"
              demoLink="https://raqimfraz09.github.io/PG-Life/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raktdaan}
              isBlog={false}
              title="Blood Bank Management System"
              description="I'm proud of the Blood Bank Management System, a MERN stack project where I used React to create user-friendly interfaces for managing blood donation and reception. The project includes distinct panels for donors, admins, hospitals, and organizations, each with tailored functionalities. This project highlights my skills in building impactful, scalable applications that enhance community health services."
              ghLink="https://github.com/raqimfraz09/Blood-Bank-Management-System"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
