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
import { translations } from "./logic/translation";

function App() {
  const [language, setLanguage] = useState("en");

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

  function handleToggleLanguage() {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
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
        onToggleLanguage={handleToggleLanguage}
        language={language}
      />
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
  onToggleLanguage,
  language,
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
        <button
          type="button"
          className="language-toggle-button"
          aria-label="toggle language"
          onClick={onToggleLanguage}>
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient
                id="gradYellowToRed"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "yellow", stopOpacity: "1" }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "red", stopOpacity: "1" }}
                />
              </linearGradient>
            </defs>
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="url(#gradYellowToRed)">
              <path
                d="M1949 4995 c-585 -95 -1074 -477 -1302 -1015 -155 -368 -172 -801
      -46 -1180 72 -217 180 -404 348 -600 l30 -35 -224 -225 c-238 -240 -252 -259
      -235 -333 9 -43 23 -62 80 -113 371 -332 855 -550 1343 -605 l107 -12 0 -233
      0 -233 -334 -3 c-320 -3 -336 -4 -362 -24 -51 -38 -69 -71 -69 -128 1 -60 27
      -106 78 -134 30 -16 92 -17 844 -17 808 0 812 0 840 21 15 11 38 36 51 54 46
      68 15 172 -63 210 -39 19 -62 20 -363 20 l-322 0 0 234 0 234 68 7 c754 72
      1413 467 1836 1100 83 124 213 385 261 525 97 280 137 520 137 810 0 286 -38
      524 -127 780 -52 151 -180 405 -273 545 -95 142 -233 310 -281 342 -37 25
      -107 31 -144 12 -12 -6 -122 -110 -244 -232 l-221 -220 -64 57 c-188 171 -481
      316 -763 376 -130 28 -455 37 -586 15z m535 -310 c279 -63 527 -203 718 -404
      227 -239 354 -527 383 -873 l7 -76 -394 -4 c-339 -4 -401 -7 -448 -22 -285
      -91 -442 -361 -375 -645 43 -180 189 -331 374 -385 38 -11 95 -16 183 -16 70
      0 128 -4 128 -9 0 -15 -126 -100 -224 -152 -196 -103 -402 -152 -636 -152
      -284 1 -529 74 -763 229 -108 72 -283 237 -349 330 l-36 51 92 6 c103 7 173
      26 264 70 77 37 177 127 228 204 51 76 93 201 100 299 12 146 63 194 210 194
      319 1 556 229 556 535 0 226 -135 421 -351 504 -66 25 -69 25 -441 31 l-374 5
      36 30 c141 116 387 222 608 261 100 18 408 11 504 -11z m1517 -209 c174 -258
      291 -560 333 -865 20 -142 21 -415 1 -563 -114 -868 -750 -1585 -1598 -1803
      -182 -46 -334 -65 -532 -65 -339 0 -606 61 -910 210 -102 49 -305 176 -383
      237 l-22 18 159 159 160 160 58 -39 c164 -109 409 -212 593 -249 890 -181
      1759 368 1978 1249 111 443 30 931 -217 1308 -28 43 -51 81 -51 85 0 4 71 78
      157 164 l158 158 18 -22 c10 -13 54 -76 98 -142z m-1970 -386 c52 -15 99 -49
      134 -99 28 -39 30 -49 30 -126 0 -77 -2 -87 -30 -126 -17 -24 -52 -57 -78 -73
      -43 -27 -58 -30 -175 -37 -174 -10 -260 -45 -349 -142 -81 -88 -110 -157 -124
      -296 -13 -119 -38 -178 -100 -236 -83 -77 -119 -88 -294 -89 l-149 -1 -23 80
      c-70 240 -71 520 -3 762 26 94 87 235 139 323 l42 70 472 0 c285 0 486 -4 508
      -10z m1519 -1073 c0 -1 -9 -34 -19 -73 -26 -91 -80 -218 -132 -310 l-43 -74
      -258 0 c-194 0 -267 3 -291 13 -83 35 -147 130 -147 217 0 86 63 180 145 216
      23 10 115 13 388 14 196 0 357 -1 357 -3z"
              />
            </g>
          </svg>
        </button>
      </div>
      <FoldableSection
        title={translations[language].personalInfo}
        handleClear={handleClearPersonal}>
        <PersonalInfoForm
          data={personalData}
          updateData={updatePersonalData}
          language={language}
        />
      </FoldableSection>
      <FoldableSection
        title={translations[language].summary}
        handleClear={handleClearSummary}>
        <Summary
          data={summaryData}
          updateData={updateSummaryData}
          language={language}
        />
      </FoldableSection>
      <FoldableSection
        title={translations[language].skills}
        handleClear={handleClearSkillList}>
        <SkillsList
          data={skillsGroupsData}
          updateData={updateSkillsGroupsData}
          onAddGroup={onAddGroup}
          onRemoveGroup={onRemoveGroup}
          language={language}
        />
      </FoldableSection>
      <FoldableSection
        title={translations[language].experience}
        handleClear={handleClearExperienceList}>
        <ExperienceList
          data={experienceData}
          updateData={updateExperienceData}
          onAddExperience={onAddExperience}
          language={language}
        />
      </FoldableSection>
      <FoldableSection
        title={translations[language].projects}
        handleClear={handleClearProjectsList}>
        <ProjectsList
          data={projectsData}
          updateData={updateProjectsData}
          onAddProject={onAddProject}
          language={language}
        />
      </FoldableSection>
      <FoldableSection
        title={translations[language].education}
        handleClear={handleClearEducationList}>
        <EducationList
          data={educationData}
          updateData={updateEducationData}
          onAddEducation={onAddEducation}
          language={language}
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
