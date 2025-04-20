import { translations } from "../logic/translation";

export default function Education({
  id,
  degree,
  institution,
  completionDate,
  onChange,
  onRemove,
  language,
}) {
  return (
    <div className="education__item form flex-col dotted-border">
      <button
        type="button"
        className="remove-button"
        aria-label="remove education"
        onClick={() => onRemove(id)}>
        x
      </button>
      <label>
        <strong>{translations[language].degree}:</strong>
        <input
          type="text"
          name="degree"
          value={degree}
          onChange={(e) => onChange(id, "degree", e.target.value)}
          placeholder="Degree or Certification name"
        />
      </label>
      <label>
        <strong>{translations[language].institution}:</strong>
        <input
          type="text"
          name="institution-name"
          value={institution}
          onChange={(e) => onChange(id, "institution", e.target.value)}
        />
      </label>
      <label>
        <strong>{translations[language].completionDate}:</strong>
        <input
          type="month"
          name="completion-date"
          value={completionDate}
          onChange={(e) => onChange(id, "completionDate", e.target.value)}
        />
      </label>
    </div>
  );
}
