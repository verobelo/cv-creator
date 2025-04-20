import { translations } from "../logic/translation";

export default function SkillsListPreview({ data, language }) {
  return (
    <section className="skills-preview">
      <h2>{translations[language].skills}</h2>
      <div
        style={{
          height: "2px",
          width: "100%",
          backgroundColor: "rgb(199, 198, 198)",
          display: "block",
          margin: "0.3rem 0",
        }}></div>
      <ul className="skills-preview__group flex-col">
        {data.map((group) => (
          <li key={group.id}>
            <h3>{group.name}: </h3>
            <ul>
              {group.skills.map((skill, index) => (
                <li key={skill.id}>
                  {skill.name}
                  {index < group.skills.length - 1 && <span> | </span>}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
