import { translations } from "../logic/translation";

export default function Experience({
  id,
  position,
  company,
  address,
  startDate,
  endDate,
  description,
  onChange,
  onRemove,
  language,
}) {
  return (
    <div className="experience__item form dotted-border">
      <button
        type="button"
        className="remove-button"
        aria-label="remove experience"
        onClick={() => onRemove(id)}>
        x
      </button>
      <label>
        <strong>{translations[language].position}: </strong>
        <input
          type="text"
          name="position"
          value={position}
          onChange={(e) => onChange(id, "position", e.target.value)}
        />
      </label>
      <label>
        <strong>{translations[language].company}: </strong>
        <input
          type="text"
          name="company-name"
          value={company}
          onChange={(e) => onChange(id, "company", e.target.value)}
        />
      </label>
      <label>
        <strong>{translations[language].address}: </strong>
        <input
          type="text"
          name="company-address"
          value={address}
          onChange={(e) => onChange(id, "address", e.target.value)}
        />
      </label>
      <label>
        <strong>{translations[language].startDate}: </strong>
        <input
          type="month"
          name="start-date"
          value={startDate}
          onChange={(e) => onChange(id, "startDate", e.target.value)}
        />
      </label>
      <label>
        <strong>{translations[language].endDate}: </strong>
        <input
          type="month"
          name="end-date"
          value={endDate}
          onChange={(e) => onChange(id, "endDate", e.target.value)}
        />
      </label>
      <label>
        <strong>{translations[language].description}: </strong>
        <textarea
          name="description"
          rows={5}
          placeholder="Write an achievement and press Enter to jump to a new bullet point line"
          value={description}
          onChange={(e) => onChange(id, "description", e.target.value)}
        />
      </label>
    </div>
  );
}
