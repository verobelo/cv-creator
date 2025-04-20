import { translations } from "../logic/translation";

export default function Project({
  id,
  name,
  technologies,
  description,
  code,
  demo,
  onChange,
  onRemove,
  language,
}) {
  return (
    <div className="project form flex-col dotted-border">
      <button
        type="button"
        className="remove-button"
        aria-label="remove project"
        onClick={() => onRemove(id)}>
        x
      </button>
      <label>
        <strong>{translations[language].projectName}:</strong>
        <input
          type="text"
          name="project-name"
          value={name}
          onChange={(e) => onChange(id, "name", e.target.value)}
        />
      </label>
      <label>
        <strong>{translations[language].technologies}:</strong>
        <input
          type="text"
          name="technology"
          value={technologies}
          onChange={(e) => onChange(id, "technologies", e.target.value)}
        />
      </label>
      <label>
        <strong>{translations[language].projectDescription}:</strong>
        <textarea
          name="description"
          value={description}
          rows={5}
          onChange={(e) => onChange(id, "description", e.target.value)}
        />
      </label>
      <label>
        <strong>{translations[language].code}:</strong>
        <input
          type="text"
          name="code"
          value={code}
          placeholder="Github repository"
          onChange={(e) => onChange(id, "code", e.target.value)}
        />
      </label>
      <label>
        <strong>{translations[language].demo}:</strong>
        <input
          type="text"
          name="demo"
          value={demo}
          placeholder="Link to your website"
          onChange={(e) => onChange(id, "demo", e.target.value)}
        />
      </label>
    </div>
  );
}
