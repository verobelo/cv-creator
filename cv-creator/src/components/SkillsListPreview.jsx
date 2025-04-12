export function SkillsListPreview({ data }) {
  return (
    <section className="skills-preview">
      <h2>Skills</h2>
      <ul className="skills-preview__group">
        {data.map((group) => (
          <li key={group.id}>
            <h3>{group.name}: </h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill.id}>{skill.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
