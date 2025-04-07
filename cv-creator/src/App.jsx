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
  return (
    <div className="cv-form">
      <PersonalInfoForm />
      <Summary />
      <SkillsList />
      <ExperienceList />
      <ProjectsList />
      <EducationList />
    </div>
  );
}

function PersonalInfoForm() {
  return (
    <section className="personal-info">
      <div className="personal-info__header header">
        <img src="/down-arrow.png" width={25} height={25} />
        <h1>Personal Information</h1>
      </div>
      <div className="personal-info__form form">
        <label>
          <strong>Full Name:</strong>
          <input type="text" name="name" value="" />
        </label>
        <label>
          <strong>Email:</strong>
          <input type="email" name="email" value="" />
        </label>
        <label>
          <strong>Phone Number:</strong>
          <input type="tel" name="phone" value="" />
        </label>
        <label>
          <strong>Address:</strong>
          <input type="text" name="address" value="" />
        </label>
        <label>
          <strong>Linkedin:</strong>
          <input type="text" name="linkedin" value="" />
        </label>
        <label>
          <strong>GitHub:</strong>
          <input type="text" name="github" value="" />
        </label>
        <label>
          <strong>Personal Website:</strong>
          <input type="text" name="website" value="" />
        </label>
      </div>
    </section>
  );
}

function Summary() {
  return (
    <section className="summary">
      <div className="summary__header header">
        <img src="/down-arrow.png" width={25} height={25} />
        <h1>Summary</h1>
      </div>
      <div className="summary__form form">
        <label>
          <textarea name="summary" value="" rows={5} />
        </label>
      </div>
    </section>
  );
}

function SkillsList() {
  return (
    <section className="skills">
      <div className="skills__header header">
        <img src="/down-arrow.png" width={25} height={25} />
        <h1>Skills</h1>
      </div>
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
      <div className="experience__header header">
        <img src="/down-arrow.png" width={25} height={25} />
        <h1>Experience</h1>
      </div>
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
        <strong>Start Date: </strong>
        <input type="date" name="start-date" value="" />
      </label>
      <label>
        <strong>End Date: </strong>
        <input type="date" name="end-date" value="" />
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
      <div className="projects__header header">
        <img src="/down-arrow.png" width={25} height={25} />
        <h1>Projects</h1>
      </div>
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
      <div className="education__header header">
        <img src="/down-arrow.png" width={25} height={25} />
        <h1>Education & Certificates</h1>
      </div>
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
        <strong>Institution Name:</strong>
        <input type="text" name="institution-name" value="" />
      </label>
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
        <strong>Completion Date:</strong>
        <input type="date" name="completion-date" value="" />
      </label>
    </div>
  );
}

function CVPreview() {
  return <div className="cv-preview">CV Preview</div>;
}

export default App;
