import Experience from "./Experience";

export default function ExperienceList({ data, updateData, onAddExperience }) {
  function handleChangeInputValue(experienceId, key, newValue) {
    updateData((prevList) =>
      prevList.map((experience) =>
        experience.id === experienceId
          ? { ...experience, [key]: newValue }
          : experience
      )
    );
  }

  function handleRemoveExperience(experienceId) {
    const updatedList = (prevList) =>
      prevList.filter((experience) => experience.id !== experienceId);
    updateData(updatedList);
  }

  return (
    <section className="experience">
      <div className="experience__form">
        <button type="button" onClick={onAddExperience}>
          + Add
        </button>
        <ul>
          {data.map((experience) => (
            <li key={experience.id}>
              <Experience
                id={experience.id}
                position={experience.position}
                company={experience.company}
                address={experience.address}
                startDate={experience.startDate}
                endDate={experience.endDate}
                description={experience.description}
                onChange={handleChangeInputValue}
                onRemove={handleRemoveExperience}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
