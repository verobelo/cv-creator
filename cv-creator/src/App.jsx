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
import ProjectsList from "./components/ProjectsList";
import ProjectsListPreview from "./components/ProjectsListPreview";
import EducationList from "./components/EducationList";
import EducationListPreview from "./components/EducationListPreview";
import { translations } from "./logic/translation";
import FormButtonsGroup from "./components/FormButtonsGroup";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [language, setLanguage] = useState("en");

  const [personalInfo, setPersonalInfo] = useLocalStorage(
    { name: "", email: "", phone: "", linkedin: "", github: "" },
    "cvPersonalInfo"
  );
  const [summary, setSummary] = useLocalStorage("", "cvSummary");
  const [skillsGroups, setSkillsGroups] = useLocalStorage([], "cvSkillsGroups");
  const [experienceList, setExperienceList] = useLocalStorage(
    [],
    "cvExperienceList"
  );
  const [projectsList, setProjectsList] = useLocalStorage([], "cvProjectsList");
  const [educationList, setEducationList] = useLocalStorage(
    [],
    "cvEducationList"
  );

  function handleAddSkillsGroup() {
    const newGroup = { id: crypto.randomUUID(), name: "", skills: [] };
    setSkillsGroups((group) => [...group, newGroup]);
  }

  function handleRemoveSkillsGroup(groupId) {
    const updatedGroups = skillsGroups.filter((group) => group.id !== groupId);
    setSkillsGroups(updatedGroups);
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

  function handleToggleLanguage() {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  }

  function handleClearPersonal() {
    setPersonalInfo({
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
    });
  }

  function handleClearSummary() {
    setSummary("");
  }

  function handleClearSkillList() {
    setSkillsGroups([]);
  }

  function handleClearExperienceList() {
    setExperienceList([]);
  }

  function handleClearProjectsList() {
    setProjectsList([]);
  }

  function handleClearEducationList() {
    setEducationList([]);
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
    setSkillsGroups([]);
    setExperienceList([]);
    setProjectsList([]);
    setEducationList([]);
  }

  function handlePrint() {
    alert(translations[language].alertPrint);
    window.print();
  }

  return (
    <div className="cv-container">
      <Header />
      <CVForm>
        <FormButtonsGroup
          onClearAll={handleClearAll}
          onPrint={handlePrint}
          onToggleLanguage={handleToggleLanguage}
          language={language}
        />
        <FoldableSection
          title={translations[language].personalInfo}
          handleClear={handleClearPersonal}>
          <PersonalInfoForm
            data={personalInfo}
            updateData={setPersonalInfo}
            language={language}
          />
        </FoldableSection>
        <FoldableSection
          title={translations[language].summary}
          handleClear={handleClearSummary}>
          <Summary data={summary} updateData={setSummary} language={language} />
        </FoldableSection>
        <FoldableSection
          title={translations[language].skills}
          handleClear={handleClearSkillList}>
          <SkillsList
            data={skillsGroups}
            updateData={setSkillsGroups}
            onAddGroup={handleAddSkillsGroup}
            onRemoveGroup={handleRemoveSkillsGroup}
            language={language}
          />
        </FoldableSection>
        <FoldableSection
          title={translations[language].experience}
          handleClear={handleClearExperienceList}>
          <ExperienceList
            data={experienceList}
            updateData={setExperienceList}
            onAddExperience={handleAddExperience}
            language={language}
          />
        </FoldableSection>
        <FoldableSection
          title={translations[language].projects}
          handleClear={handleClearProjectsList}>
          <ProjectsList
            data={projectsList}
            updateData={setProjectsList}
            onAddProject={handleAddProject}
            language={language}
          />
        </FoldableSection>
        <FoldableSection
          title={translations[language].education}
          handleClear={handleClearEducationList}>
          <EducationList
            data={educationList}
            updateData={setEducationList}
            onAddEducation={handleAddEducation}
            language={language}
          />
        </FoldableSection>
      </CVForm>

      <div className="preview-container">
        <p className="preview-note">{translations[language].alertPreview}</p>
        <CVPreview
          personalData={personalInfo}
          summaryData={summary}
          skillsGroupsData={skillsGroups}
          experienceData={experienceList}
          projectsData={projectsList}
          educationData={educationList}
          language={language}
        />
      </div>
      <Footer />
    </div>
  );
}

function CVForm({ children }) {
  return <div className="cv-form">{children}</div>;
}

function CVPreview({
  personalData,
  summaryData,
  skillsGroupsData,
  experienceData,
  projectsData,
  educationData,
  language,
}) {
  return (
    <div className="cv-preview">
      <PersonalInfoPreview data={personalData} />
      <SummaryPreview data={summaryData} />
      <SkillsListPreview data={skillsGroupsData} language={language} />
      <ExperienceListPreview data={experienceData} language={language} />
      <ProjectsListPreview data={projectsData} language={language} />
      <EducationListPreview data={educationData} language={language} />
    </div>
  );
}

export default App;
