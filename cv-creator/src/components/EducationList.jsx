import Education from "./Education";

export default function EducationList({ data, updateData, onAddEducation }) {
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

  return (
    <section className="education">
      <div className="education__form">
        <button type="button" onClick={onAddEducation}>
          + Add
        </button>
        <ul>
          {data.map((education) => (
            <li key={education.id}>
              <Education
                id={education.id}
                degree={education.degree}
                institution={education.institution}
                completionDate={education.completionDate}
                onChange={handleChangeInputValue}
                onRemove={handleRemoveEducation}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
