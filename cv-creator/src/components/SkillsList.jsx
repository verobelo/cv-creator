import SkillsGroup from "./SkillsGroup";

export default function SkillsList({
  data,
  updateData,
  onAddGroup,
  onRemoveGroup,
}) {
  const isEmpty = data.length === 0;
  return (
    <section className="skills">
      <button type="button" onClick={onAddGroup}>
        + Add Skill Group
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
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
