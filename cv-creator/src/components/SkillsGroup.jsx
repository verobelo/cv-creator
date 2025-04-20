import Skill from "./Skill";
import { translations } from "../logic/translation";

export default function SkillsGroup({
  id,
  name,
  skills,
  updateData,
  handleRemove,
  language,
}) {
  function handleOnChangeGroupName(e) {
    const newName = e.target.value;
    updateData((prevGroups) =>
      prevGroups.map((group) =>
        group.id === id ? { ...group, name: newName } : group
      )
    );
  }

  function handleOnChangeSkillName(skillId, newName) {
    updateData((prevGroups) =>
      prevGroups.map((group) =>
        group.id === id
          ? {
              ...group,
              skills: group.skills.map((skill) =>
                skill.id === skillId ? { ...skill, name: newName } : skill
              ),
            }
          : group
      )
    );
  }

  function handleAddSkill() {
    const newSkill = { name: "", id: crypto.randomUUID() };
    updateData((prevGroups) =>
      prevGroups.map((group) =>
        group.id === id
          ? { ...group, skills: [...group.skills, newSkill] }
          : group
      )
    );
  }

  function handleRemoveSkill(skillId) {
    updateData((prevGroups) =>
      prevGroups.map((group) =>
        group.id === id
          ? {
              ...group,
              skills: group.skills.filter((skill) => skill.id !== skillId),
            }
          : group
      )
    );
  }
  return (
    <>
      <label>
        <strong>{translations[language].skillGroup}: </strong>
        <input
          type="text"
          name="skill-group"
          value={name}
          onChange={handleOnChangeGroupName}
          placeholder="Frameworks, languages, soft skills etc"
        />
      </label>
      <button
        type="button"
        aria-label="remove skill group"
        onClick={() => handleRemove(id)}>
        x
      </button>

      <ul className="skills__list">
        {skills.map((skill) => (
          <li key={skill.id}>
            <Skill
              id={skill.id}
              name={skill.name}
              onChange={handleOnChangeSkillName}
              onRemove={handleRemoveSkill}
              language={language}
            />
          </li>
        ))}
      </ul>

      <button type="button" onClick={handleAddSkill}>
        + {translations[language].addSkill}
      </button>
    </>
  );
}
