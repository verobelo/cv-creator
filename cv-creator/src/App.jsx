import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="cv-container">
      <Header />
      <CVForm />
      <CVPreview />
      <Footer />
    </div>
  );
}

function CVForm() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
    website: "",
  });

  function handleClearPersonal() {
    setPersonalInfo({
      name: "",
      email: "",
      phone: "",
      address: "",
      linkedin: "",
      github: "",
      website: "",
    });
  }

  const [summary, setSummary] = useState("");

  function handleClearSummary() {
    setSummary("");
  }

  return (
    <div className="cv-form">
      <FoldableSection
        title="Personal Information"
        handleClear={handleClearPersonal}>
        <PersonalInfoForm data={personalInfo} updateData={setPersonalInfo} />
      </FoldableSection>
      <FoldableSection title="Summary" handleClear={handleClearSummary}>
        <Summary data={summary} updateData={setSummary} />
      </FoldableSection>
      <FoldableSection title="Skills">
        <SkillsList />
      </FoldableSection>
      <FoldableSection title="Experience">
        <ExperienceList />
      </FoldableSection>
      <FoldableSection title="Projects">
        <ProjectsList />
      </FoldableSection>
      <FoldableSection title="Education">
        <EducationList />
      </FoldableSection>
    </div>
  );
}

function FoldableSection({ title, children, handleClear }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <section className="foldable-section">
      <div
        className="foldable-section__header header"
        role="button"
        aria-expanded={isOpen}
        tabIndex={0}>
        <img
          src={isOpen ? "/down-arrow.png" : "/chevron.png"}
          alt="toggle"
          width={25}
          height={25}
        />
        <h1 onClick={handleOpen}>{title}</h1>
        <button
          type="button"
          aria-label="Clear section"
          className="clear-button"
          onClick={handleClear}>
          <img
            src="/vacuum-cleaner.png"
            alt="vacuum cleaner icon"
            width={30}
            height={30}
          />
        </button>
      </div>
      <>{isOpen && children}</>
    </section>
  );
}

function PersonalInfoForm({ data, updateData }) {
  return (
    <section className="personal-info">
      <div className="personal-info__form form">
        <label>
          <strong>Full Name:</strong>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={(e) => updateData({ ...data, name: e.target.value })}
          />
        </label>
        <label>
          <strong>Email:</strong>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={(e) => updateData({ ...data, email: e.target.value })}
          />
        </label>
        <label>
          <strong>Phone Number:</strong>
          <input
            type="tel"
            name="phone"
            value={data.phone}
            onChange={(e) => updateData({ ...data, phone: e.target.value })}
          />
        </label>
        <label>
          <strong>Address:</strong>
          <input
            type="text"
            name="address"
            value={data.address}
            onChange={(e) => updateData({ ...data, address: e.target.value })}
          />
        </label>
        <label>
          <strong>Linkedin:</strong>
          <input
            type="text"
            name="linkedin"
            value={data.linkedin}
            onChange={(e) => updateData({ ...data, linkedin: e.target.value })}
          />
        </label>
        <label>
          <strong>GitHub:</strong>
          <input
            type="text"
            name="github"
            value={data.github}
            onChange={(e) => updateData({ ...data, github: e.target.value })}
          />
        </label>
        <label>
          <strong>Personal Website:</strong>
          <input
            type="text"
            name="website"
            value={data.website}
            onChange={(e) => updateData({ ...data, website: e.target.value })}
          />
        </label>
      </div>
    </section>
  );
}

function Summary({ data, updateData }) {
  return (
    <section className="summary">
      <div className="summary__form form">
        <label>
          <textarea
            name="summary"
            rows={5}
            value={data}
            onChange={(e) => updateData(e.target.value)}
          />
        </label>
      </div>
    </section>
  );
}

function SkillsList() {
  return (
    <section className="skills">
      <button type="button">+ Add</button>
      <div className="skills__form form">
        <SkillGroup />
      </div>
    </section>
  );
}

function SkillGroup() {
  return (
    <div className="skill__group">
      <label>
        <strong>Skill Group: </strong>
        <input
          type="text"
          name="skill-group"
          value=""
          placeholder="Frameworks, languages, soft skills etc"
        />
      </label>

      <ul>
        <Skill />
        <Skill />
      </ul>
      <button type="button">+ Add</button>
    </div>
  );
}

function Skill() {
  return (
    <>
      <li className="skill">React</li>
      <button type="button">x</button>
    </>
  );
}

function ExperienceList() {
  return (
    <section className="experience">
      <div className="experience__form">
        <button type="button">+ Add</button>
        <Experience />
      </div>
    </section>
  );
}

function Experience() {
  return (
    <div className="experience__item form">
      <label>
        <strong>Position: </strong>
        <input type="text" name="position" value="" />
      </label>
      <label>
        <strong>Company Name: </strong>
        <input type="text" name="company-name" value="" />
      </label>
      <label>
        <strong>Company Address: </strong>
        <input type="text" name="company-address" value="" />
      </label>
      <label>
        <strong>Start Date: </strong>
        <input type="month" name="start-date" value="" />
      </label>
      <label>
        <strong>End Date: </strong>
        <input type="month" name="end-date" value="" />
      </label>
      <label>
        <strong>Description: </strong>
        <textarea name="description" rows={5} />
      </label>
    </div>
  );
}

function ProjectsList() {
  return (
    <section className="projects">
      <div className="projects__form">
        <button type="button">+ Add</button>
        <Project />
      </div>
    </section>
  );
}

function Project() {
  return (
    <div className="project form">
      <label>
        <strong>Project Name:</strong>
        <input type="text" name="project-name" value="" />
      </label>
      <label>
        <strong>Technologies:</strong>
        <input type="text" name="technology" value="" />
      </label>
      <label>
        <strong>Description:</strong>
        <textarea name="description" value="" rows={5} />
      </label>
      <label>
        <strong>Code:</strong>
        <input
          type="text"
          name="code"
          value=""
          placeholder="Github repository"
        />
      </label>
      <label>
        <strong>Demo:</strong>
        <input
          type="text"
          name="demo"
          value=""
          placeholder="Link to your website"
        />
      </label>
    </div>
  );
}

function EducationList() {
  return (
    <section className="education">
      <div className="education__form">
        <button type="button">+ Add</button>
        <Education />
      </div>
    </section>
  );
}

function Education() {
  return (
    <div className="education__item form">
      <label>
        <strong>Degree:</strong>
        <input
          type="text"
          name="degree"
          value=""
          placeholder="Degree or Certification name"
        />
      </label>
      <label>
        <strong>Institution Name:</strong>
        <input type="text" name="institution-name" value="" />
      </label>
      <label>
        <strong>Completion Date:</strong>
        <input type="month" name="completion-date" value="" />
      </label>
    </div>
  );
}

function CVPreview() {
  return (
    <div className="cv-preview">
      <PersonalInfoPreview />
      <SummaryPreview />
      <SkillsListPreview />
      <ExperienceListPreview />
      <ProjectsListPreview />
      <EducationListPreview />
    </div>
  );
}

function PersonalInfoPreview() {
  return (
    <section className="personal-info-preview">
      <h1>Anna-Isabella BROOKS</h1>
      <ul className="personal-info-preview__contacts">
        <li>
          <img src="email.png" alt="email icon" width={15} height={15} />
          annbrooks@gmail.com
        </li>
        <li>
          <img src="telephone.png" alt="phone icon" width={15} height={15} />
          +41999665478
        </li>
        <li>
          <img src="location.png" alt="home icon" width={15} height={15} />
          New York
        </li>
        <li>
          <img src="linkedin.png" alt="linkedin icon" width={15} height={15} />
          linkedin.com/in/annabrooks
        </li>
        <li>
          <img src="github.png" alt="github icon" width={15} height={15} />
          GitHub
        </li>
        <li>
          <img src="web.png" alt="web icon" width={15} height={15} />
          github.com/annabrooks
        </li>
      </ul>
    </section>
  );
}

function SummaryPreview() {
  return (
    <section className="summary-preview">
      <p>
        Self-taught Software Developer with more than 5 years of experience.
        Skilled in React, Tailwind and Node.js. Created more 50+
        fully-functional web applications. Specialized in Responsive and
        Accessible Web Design and Agile work environment.
      </p>
    </section>
  );
}

function SkillsListPreview() {
  return (
    <section className="skills-preview">
      <h2>Skills</h2>
      <div className="skills-preview__group">
        <h3>Frameworks: </h3>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
        </ul>
      </div>
      <div className="skills-preview__group">
        <h3>Languages: </h3>
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
    </section>
  );
}

function ExperienceListPreview() {
  return (
    <section className="experience-preview">
      <h2>Experience</h2>
      <ul className="experience-preview__list">
        <li className="experience-preview__item">
          <div className="experience-preview__top">
            <div className="experience-preview__top--left">
              <h3>Freelance Frontend Developer</h3>
              <p>Fiver</p>
            </div>
            <div className="experience-preview__top--right">
              <p>
                <span>Remote</span>
                <span> | </span>
                <span>05.2022</span>
                <span> - </span>
                <span>Current</span>
              </p>
            </div>
          </div>
          <div className="experience-preview__description">
            <ul>
              <li>Built responsive websites with React and Tailwind</li>
              <li>Collaborated with clients on Agile projects</li>
            </ul>
          </div>
        </li>

        <li className="experience-preview__item">
          <div className="experience-preview__top">
            <div className="experience-preview__top--left">
              <h3>Web Development Intern</h3>
              <p>New Technologies</p>
            </div>
            <div className="experience-preview__top--right">
              <p>
                <span>New York</span>
                <span> | </span>
                <span>01.2021</span>
                <span> - </span>
                <span>06.2021</span>
              </p>
            </div>
          </div>
          <div className="experience-preview__description">
            <ul>
              <li>Learned full-stack fundamentals with a team</li>
              <li>Contributed to a group project using Git and GitHub</li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
}

function ProjectsListPreview() {
  return (
    <section className="projects-preview">
      <h2>Projects</h2>
      <ol className="projects-preview__list">
        <li className="project-preview__item">
          <h3>CV Creator (React, CSS)</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          <div className="project-preview__links">
            <a
              href="https://cvcreator.com"
              target="_blank"
              rel="noopener noreferrer">
              Demo
            </a>
            <a
              href="https://github.com/annbrooks/cvcreator.io"
              target="_blank"
              rel="noopener noreferrer">
              Code
            </a>
          </div>
        </li>

        <li className="project-preview__item">
          <h3>Portfolio Website (HTML, CSS, JS)</h3>
          <p>A clean and responsive portfolio to showcase my projects...</p>
          <div className="project-preview__links">
            <a
              href="https://anabrooks.dev"
              target="_blank"
              rel="noopener noreferrer">
              Demo
            </a>
            <a
              href="https://github.com/annbrooks/portfolio"
              target="_blank"
              rel="noopener noreferrer">
              Code
            </a>
          </div>
        </li>
      </ol>
    </section>
  );
}

function EducationListPreview() {
  return (
    <section className="education-preview">
      <h2>Education & Certifications</h2>
      <ul className="education-preview__list">
        <li className="education-preview__item">
          <div className="education-preview__item--left">
            <h3>Bachelor Degree in Computer Science</h3>
          </div>
          <div className="education-preview__item--right">
            <p>
              <span>New York State University</span>
              <span> | </span>
              <span>06.2012</span>
            </p>
          </div>
        </li>
        <li className="education-preview__item">
          <div className="education-preview__item--left">
            <h3>Meta Software Developer Certification</h3>
          </div>
          <div className="education-preview__item--right">
            <p>
              <span>Coursera</span>
              <span> | </span>
              <span>04.2021</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
export default App;
