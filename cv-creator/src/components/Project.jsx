export default function Project({
  id,
  name,
  technologies,
  description,
  code,
  demo,
  onChange,
  onRemove,
}) {
  return (
    <div className="project form">
      <button
        type="button"
        className="remove-button"
        onClick={() => onRemove(id)}>
        x
      </button>
      <label>
        <strong>Project Name:</strong>
        <input
          type="text"
          name="project-name"
          value={name}
          onChange={(e) => onChange(id, "name", e.target.value)}
        />
      </label>
      <label>
        <strong>Technologies:</strong>
        <input
          type="text"
          name="technology"
          value={technologies}
          onChange={(e) => onChange(id, "technologies", e.target.value)}
        />
      </label>
      <label>
        <strong>Description:</strong>
        <textarea
          name="description"
          value={description}
          rows={5}
          onChange={(e) => onChange(id, "description", e.target.value)}
        />
      </label>
      <label>
        <strong>Code:</strong>
        <input
          type="text"
          name="code"
          value={code}
          placeholder="Github repository"
          onChange={(e) => onChange(id, "code", e.target.value)}
        />
      </label>
      <label>
        <strong>Demo:</strong>
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
