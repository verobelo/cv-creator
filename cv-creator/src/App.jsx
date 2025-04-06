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
      {/*
    <SkillsList />
    <ExperienceList />
    <ProjectsList />
    <Education />*/}
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
      <div className="personal-info__form">
        <label>
          Full Name:
          <input type="text" name="name" value="" />
        </label>
        <label>
          Email:
          <input type="email" name="email" value="" />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phone" value="" />
        </label>
        <label>
          Address:
          <input type="text" name="address" value="" />
        </label>
        <label>
          Linkedin:
          <input type="text" name="linkedin" value="" />
        </label>
        <label>
          GitHub:
          <input type="text" name="github" value="" />
        </label>
        <label>
          Personal Website:
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
      <div className="summary__form">
        <label>
          <textarea name="summary" value="" rows={5} />
        </label>
      </div>
    </section>
  );
}

function CVPreview() {
  return <div className="cv-preview">CV Preview</div>;
}

export default App;
