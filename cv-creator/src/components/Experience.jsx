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
}) {
  return (
    <div className="experience__item form dotted-border">
      <button
        type="button"
        className="remove-button"
        onClick={() => onRemove(id)}>
        x
      </button>
      <label>
        <strong>Position: </strong>
        <input
          type="text"
          name="position"
          value={position}
          onChange={(e) => onChange(id, "position", e.target.value)}
        />
      </label>
      <label>
        <strong>Company Name: </strong>
        <input
          type="text"
          name="company-name"
          value={company}
          onChange={(e) => onChange(id, "company", e.target.value)}
        />
      </label>
      <label>
        <strong>Company Address: </strong>
        <input
          type="text"
          name="company-address"
          value={address}
          onChange={(e) => onChange(id, "address", e.target.value)}
        />
      </label>
      <label>
        <strong>Start Date: </strong>
        <input
          type="month"
          name="start-date"
          value={startDate}
          onChange={(e) => onChange(id, "startDate", e.target.value)}
        />
      </label>
      <label>
        <strong>End Date: </strong>
        <input
          type="month"
          name="end-date"
          value={endDate}
          onChange={(e) => onChange(id, "endDate", e.target.value)}
        />
      </label>
      <label>
        <strong>Description: </strong>
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
