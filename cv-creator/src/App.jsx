import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FoldableSection from "./components/FoldableSection";
import PersonalInfoForm from "./components/PersonalInfoForm";
import PersonalInfoPreview from "./components/PersonalInfoPreview";
import Summary from "./components/Summary";
import SummaryPreview from "./components/SummaryPreview";
import SkillsList from "./components/SkillsList";
import SkillsListPreview from "./components/SkillsListPreview";
import ExperienceList from "./components/ExperienceList";
import ExperienceListPreview from "./components/ExperienceListPreview";
import ProjectsList from "./ProjectsList";
import ProjectsListPreview from "./ProjectsListPreview";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
    website: "",
  });
  const [summary, setSummary] = useState("");
  const [skillsGroups, setskillsGroups] = useState([]);
  const [experienceList, setExperienceList] = useState([]);
  const [projectsList, setProjectsList] = useState([]);

  function handleAddSkillsGroup() {
    const newGroup = { id: crypto.randomUUID(), name: "", skills: [] };
    setskillsGroups((group) => [...group, newGroup]);
  }

  function handleRemoveSkillsGroup(groupId) {
    const updatedGroups = skillsGroups.filter((group) => group.id !== groupId);
    setskillsGroups(updatedGroups);
  }

  function handleAddExperience() {
    const newExperience = {
      id: crypto.randomUUID(),
      position: "",
      company: "",
      address: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    setExperienceList((prevList) => [...prevList, newExperience]);
  }

  function handleAddProject() {
    const newProject = {
      id: crypto.randomUUID(),
      name: "",
      technologies: "",
      description: "",
      code: "",
      demo: "",
    };

    setProjectsList((prevList) => [...prevList, newProject]);
  }

  return (
    <div className="cv-container">
      <Header />
      <CVForm
        personalData={personalInfo}
        updatePersonalData={setPersonalInfo}
        summaryData={summary}
        updateSummaryData={setSummary}
        skillsGroupsData={skillsGroups}
        updateSkillsGroupsData={setskillsGroups}
        onAddGroup={handleAddSkillsGroup}
        onRemoveGroup={handleRemoveSkillsGroup}
        experienceData={experienceList}
        updateExperienceData={setExperienceList}
        onAddExperience={handleAddExperience}
        projectsData={projectsList}
        updateProjectsData={setProjectsList}
        onAddProject={handleAddProject}
      />
      <CVPreview
        personalData={personalInfo}
        summaryData={summary}
        skillsGroupsData={skillsGroups}
        experienceData={experienceList}
        projectsData={projectsList}
      />
      <Footer />
    </div>
  );
}

function CVForm({
  personalData,
  updatePersonalData,
  summaryData,
  updateSummaryData,
  skillsGroupsData,
  updateSkillsGroupsData,
  onAddGroup,
  onRemoveGroup,
  experienceData,
  updateExperienceData,
  onAddExperience,
  projectsData,
  updateProjectsData,
  onAddProject,
}) {
  function handleClearPersonal() {
    updatePersonalData({
      name: "",
      email: "",
      phone: "",
      address: "",
      linkedin: "",
      github: "",
      website: "",
    });
  }

  function handleClearSummary() {
    updateSummaryData("");
  }

  function handleClearSkillList() {
    updateSkillsGroupsData([]);
  }

  function handleClearExperienceList() {
    updateExperienceData([]);
  }

  function handleClearProjectsList() {
    updateProjectsData([]);
  }

  return (
    <div className="cv-form">
      <FoldableSection
        title="Personal Information"
        handleClear={handleClearPersonal}>
        <PersonalInfoForm data={personalData} updateData={updatePersonalData} />
      </FoldableSection>
      <FoldableSection title="Summary" handleClear={handleClearSummary}>
        <Summary data={summaryData} updateData={updateSummaryData} />
      </FoldableSection>
      <FoldableSection title="Skills" handleClear={handleClearSkillList}>
        <SkillsList
          data={skillsGroupsData}
          updateData={updateSkillsGroupsData}
          onAddGroup={onAddGroup}
          onRemoveGroup={onRemoveGroup}
        />
      </FoldableSection>
      <FoldableSection
        title="Experience"
        handleClear={handleClearExperienceList}>
        <ExperienceList
          data={experienceData}
          updateData={updateExperienceData}
          onAddExperience={onAddExperience}
        />
      </FoldableSection>
      <FoldableSection title="Projects" handleClear={handleClearProjectsList}>
        <ProjectsList
          data={projectsData}
          updateData={updateProjectsData}
          onAddProject={onAddProject}
        />
      </FoldableSection>
      {/*     
      <FoldableSection title="Education">
        <EducationList />
      </FoldableSection>*/}
    </div>
  );
}

function CVPreview({
  personalData,
  summaryData,
  skillsGroupsData,
  experienceData,
  projectsData,
}) {
  return (
    <div className="cv-preview">
      <PersonalInfoPreview data={personalData} />
      <SummaryPreview data={summaryData} />
      <SkillsListPreview data={skillsGroupsData} />
      <ExperienceListPreview data={experienceData} />
      <ProjectsListPreview data={projectsData} />
      {/*    
          
      <EducationListPreview />*/}
    </div>
  );
}

{
  /*


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
}*/
}

export default App;
