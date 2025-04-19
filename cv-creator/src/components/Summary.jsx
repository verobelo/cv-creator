import { translations } from "../logic/translation";
export default function Summary({ data, updateData, language }) {
  return (
    <section className="summary">
      <div className="summary__form form">
        <label>
          <textarea
            name="summary"
            placeholder={translations[language].summaryPlaceholder}
            rows={5}
            value={data}
            onChange={(e) => updateData(e.target.value)}
          />
        </label>
      </div>
    </section>
  );
}
