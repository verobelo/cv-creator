import Education from "./Education";
import { translations } from "../logic/translation";

export default function EducationList({
  data,
  updateData,
  onAddEducation,
  language,
}) {
  function handleChangeInputValue(educationId, key, newValue) {
    updateData((prevList) =>
      prevList.map((education) =>
        education.id === educationId
          ? { ...education, [key]: newValue }
          : education
      )
    );
  }

  function handleRemoveEducation(educationId) {
    const updatedList = (prevList) =>
      prevList.filter((education) => education.id !== educationId);
    updateData(updatedList);
  }

  const isEmpty = data.length === 0;

  return (
    <section className="education">
      <div className="education__form">
        <button type="button" onClick={onAddEducation}>
          + {translations[language].add}
        </button>
        <ul className={!isEmpty ? "form" : ""}>
          {data.map((education) => (
            <li key={education.id}>
              <Education
                id={education.id}
                degree={education.degree}
                institution={education.institution}
                completionDate={education.completionDate}
                onChange={handleChangeInputValue}
                onRemove={handleRemoveEducation}
                language={language}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
