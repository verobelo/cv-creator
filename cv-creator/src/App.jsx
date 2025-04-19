import { useState, useEffect } from "react";

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
import ProjectsList from "./components/ProjectsList";
import ProjectsListPreview from "./components/ProjectsListPreview";
import EducationList from "./components/EducationList";
import EducationListPreview from "./components/EducationListPreview";

function App() {
  const [personalInfo, setPersonalInfo] = useState(() => {
    const stored = localStorage.getItem("cvPersonalInfo");
    return stored
      ? JSON.parse(stored)
      : {
          name: "",
          email: "",
          phone: "",
          linkedin: "",
          github: "",
        };
  });

  useEffect(() => {
    localStorage.setItem("cvPersonalInfo", JSON.stringify(personalInfo));
  }, [personalInfo]);

  const [summary, setSummary] = useState(() => {
    const stored = localStorage.getItem("cvSummary");
    return stored ? JSON.parse(stored) : "";
  });

  useEffect(() => {
    localStorage.setItem("cvSummary", JSON.stringify(summary));
  }, [summary]);

  const [skillsGroups, setskillsGroups] = useState(() => {
    const stored = localStorage.getItem("cvSkillsGroups");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cvSkillsGroups", JSON.stringify(skillsGroups));
  }, [skillsGroups]);

  const [experienceList, setExperienceList] = useState(() => {
    const stored = localStorage.getItem("cvExperienceList");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cvExperienceList", JSON.stringify(experienceList));
  }, [experienceList]);

  const [projectsList, setProjectsList] = useState(() => {
    const stored = localStorage.getItem("cvProjectsList");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cvProjectsList", JSON.stringify(projectsList));
  }, [projectsList]);

  const [educationList, setEducationList] = useState(() => {
    const stored = localStorage.getItem("cvEducationList");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cvEducationList", JSON.stringify(educationList));
  }, [educationList]);

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

  function handleAddEducation() {
    const newEducation = {
      id: crypto.randomUUID(),
      degree: "",
      institution: "",
      completionDate: "",
    };
    setEducationList((prevList) => [...prevList, newEducation]);
  }

  function handleClearAll() {
    setPersonalInfo({
      name: "",
      email: "",
      phone: "",
      address: "",
      linkedin: "",
      github: "",
      website: "",
    });
    setSummary("");
    setskillsGroups([]);
    setExperienceList([]);
    setProjectsList([]);
    setEducationList([]);
  }

  function handlePrint() {
    alert("Click on Settings to adjust your CV even more");
    window.print();
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
        educationData={educationList}
        updateEducationData={setEducationList}
        onAddEducation={handleAddEducation}
        onClearAll={handleClearAll}
        onPrint={handlePrint}
      />
      <div className="preview-container">
        <p className="preview-note">
          This preview fits one A4 page. Keep your entries concise!
        </p>
        <CVPreview
          personalData={personalInfo}
          summaryData={summary}
          skillsGroupsData={skillsGroups}
          experienceData={experienceList}
          projectsData={projectsList}
          educationData={educationList}
        />
      </div>
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
  educationData,
  updateEducationData,
  onAddEducation,
  onClearAll,
  onPrint,
}) {
  function handleClearPersonal() {
    updatePersonalData({
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
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

  function handleClearEducationList() {
    updateEducationData([]);
  }

  return (
    <div className="cv-form">
      <div className="buttons">
        <button type="button" className="print-button" onClick={onPrint}>
          <img
            src="printer.png"
            aria-label="print cv"
            alt="printer icon"
            width={35}
            height={35}
          />
        </button>
        <button type="button" className="clear-all-button" onClick={onClearAll}>
          <img
            src="./vacuum-cleaner.png"
            alt="vacuum cleaner icon"
            aria-label="clear all sections"
            width={35}
            height={35}
          />
        </button>
        <button type="button" className="language-toggle-button">
          <img
            src="./globe.png"
            alt="globe icon"
            aria-label="toggle languages"
            width={35}
            height={35}
          />
        </button>
      </div>
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
      <FoldableSection title="Education" handleClear={handleClearEducationList}>
        <EducationList
          data={educationData}
          updateData={updateEducationData}
          onAddEducation={onAddEducation}
        />
      </FoldableSection>
    </div>
  );
}

function CVPreview({
  personalData,
  summaryData,
  skillsGroupsData,
  experienceData,
  projectsData,
  educationData,
}) {
  return (
    <div className="cv-preview">
      <PersonalInfoPreview data={personalData} />
      <SummaryPreview data={summaryData} />
      <SkillsListPreview data={skillsGroupsData} />
      <ExperienceListPreview data={experienceData} />
      <ProjectsListPreview data={projectsData} />
      <EducationListPreview data={educationData} />
    </div>
  );
}

export default App;
