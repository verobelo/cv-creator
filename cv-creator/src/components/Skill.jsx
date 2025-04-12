export default function Skill({ name, id, onChange, onRemove }) {
  return (
    <>
      <label className="skill">
        <input
          type="text"
          name="skill"
          value={name}
          onChange={(e) => onChange(id, e.target.value)}
        />
      </label>
      <button type="button" onClick={() => onRemove(id)}>
        x
      </button>
    </>
  );
}
