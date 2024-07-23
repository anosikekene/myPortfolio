import React from "react";
import { Link, Element } from "react-scroll";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import MiniCard from "./miniCard";
import outlook from "./outlook.png";
import gmail from "./gmail.png";
import linkedin from "./linkedin.png";
import github from "./github.png";
import resume from "./resume.png";
import resumeLink from "./AnosikeResumeFall2024.pdf";

function App() {
  const cards = [
    {
      title: "Media Lister",
      description:
        "Create, modify, and delete media entries effortlessly with this versatile C++ application. Seamlessly integrate any form of media into a dynamic ranking system, allowing users to curate and manage content with ease.",
      gitLink: "https://github.com/anosikekene/MovieLister",
      languages: ["C++"],
    },
    {
      title: "Media Rater",
      description:
        "Create, modify, delete media entries effortlessly and store them in a personal SQL table, with this versatile JavaScript application. Seamlessly integrate any form of media into a dynamic ranking system, allowing users to curate and manage content with ease.",
      gitLink: "https://github.com/anosikekene/MediaRater",
      languages: ["Javascript", "SQL"],
    },
  ];

  const moreCards = [
    {
      name: "Resume",
      logo: resume,
      cardlink: resumeLink,
    },
    {
      name: "Github",
      logo: github,
      cardlink: "https://github.com/anosikekene",
    },
  ];

  const minicards = [
    {
      name: "Outlook",
      logo: outlook,
      cardlink: "mailto:anosikku@mail.ud.edu",
    },
    {
      name: "Gmail",
      logo: gmail,
      cardlink: "mailto:keneanosike@gmail.com",
    },
    {
      name: "LinkedIn",
      logo: linkedin,
      cardlink: "https://www.linkedin.com/in/keneanosike/",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Inner-header">
          <nav className="navbar">
            <Link className="navlink" to="home" smooth={true} duration={500}>
              Home
            </Link>
            <Link className="navlink" to="about" smooth={true} duration={500}>
              About
            </Link>
            <Link
              className="navlink"
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
            <Link className="navlink" to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <section className="Body">
        <Element name="home">
          <div className="Home">
            <h1>Welcome to My Portfolio.</h1>
          </div>
        </Element>
        <Element name="about">
          <div className="About">
            <h1>About</h1>
            <h2>Hello I'm Kene!</h2>
            <p>
              I'm a passionate fourth-year Computer Science student at the
              University of Cincinnati with a keen interest in software/web
              development and problem-solving. Throughout my academic journey,
              I've acquired proficiency in several programming languages and
              technologies, including C++, Python, HTML/CSS, and JavaScript.
            </p>
            <p>
              I thrive in collaborative environments where I can leverage my
              skills to contribute effectively. I enjoy tackling complex
              challenges to create efficient and scalable solutions, driven by a
              strong sense of determination once I set my sights on a goal. My
              ambition is to use my skills and experiences to make a meaningful
              impact in the tech industry while continuously evolving as a
              software developer.
            </p>
            <p>
              When I'm not immersed in coding or studying, you'll often find me
              at the gym, where I enjoy lifting weights and staying active. I'm
              a firm believer in technology's potential to turn ideas into
              reality and relish exploring its boundless possibilities. Whether
              it's mastering new programming languages or solving intricate
              algorithms, I'm always eager to take on new challenges. Feel free
              to explore my portfolio to discover some of my projects and learn
              more about my journey in Computer Science!
            </p>
          </div>
        </Element>
        <Element name="projects">
          <div className="Projects">
            <h1>Projects</h1>
            <h2>Things I've Worked On</h2>
            <div className="cards">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  gitLink={card.gitLink}
                  link={card.link}
                  languages={card.languages}
                />
              ))}
            </div>
          </div>
        </Element>
        <Element name="extras">
          <div className="Extras">
            <h1>More Stuff</h1>
            <p>
              Explore more of my work and background: GitHub: View my latest
              projects and contributions on GitHub. Resume: Download my resume
              to learn more about my skills and experiences. Feel free to browse
              through and get in touch if you have any questions or
              opportunities!
            </p>
            <div className="minicards">
              {moreCards.map((minicard, index) => (
                <MiniCard
                  key={index}
                  name={minicard.name}
                  logo={minicard.logo}
                  cardlink={minicard.cardlink}
                />
              ))}
            </div>
          </div>
        </Element>
        <Element name="contact">
          <div className="Contact">
            <h1>Contact Me!</h1>
            <p>
              Feel free to reach out to me through any of the following
              channels: I'm open to discussing opportunities, collaborations, or
              just chatting about technology and software development. Looking
              forward to connecting with you!
            </p>
            <div className="minicards">
              {minicards.map((minicard, index) => (
                <MiniCard
                  key={index}
                  name={minicard.name}
                  logo={minicard.logo}
                  cardlink={minicard.cardlink}
                />
              ))}
            </div>
          </div>
        </Element>
      </section>
    </div>
  );
}

export default App;
