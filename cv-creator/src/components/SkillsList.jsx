import SkillsGroup from "./SkillsGroup";
import { translations } from "../logic/translation";

export default function SkillsList({
  data,
  updateData,
  onAddGroup,
  onRemoveGroup,
  language,
}) {
  const isEmpty = data.length === 0;
  return (
    <section className="skills">
      <button type="button" onClick={onAddGroup}>
        + {translations[language].addSkillGroup}
      </button>
      <ul className={`skills__form ${!isEmpty ? "form" : ""}`}>
        {data.map((group) => (
          <li key={group.id} className="skill__group">
            <SkillsGroup
              id={group.id}
              name={group.name}
              skills={group.skills}
              handleRemove={onRemoveGroup}
              updateData={updateData}
              language={language}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
