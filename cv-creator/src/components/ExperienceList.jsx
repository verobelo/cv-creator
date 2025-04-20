import Experience from "./Experience";
import { translations } from "../logic/translation";

export default function ExperienceList({
  data,
  updateData,
  onAddExperience,
  language,
}) {
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
  const isEmpty = data.length === 0;
  return (
    <section className="experience">
      <div className="experience__form">
        <button type="button" onClick={onAddExperience}>
          + {translations[language].add}
        </button>
        <ul className={!isEmpty ? "form" : ""}>
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
                language={language}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
