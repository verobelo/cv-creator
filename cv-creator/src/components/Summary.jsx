export default function Summary({ data, updateData }) {
  return (
    <section className="summary">
      <div className="summary__form form">
        <label>
          <textarea
            name="summary"
            placeholder="Write a short summary presenting yourself, your best skills, your goals etc"
            rows={5}
            value={data}
            onChange={(e) => updateData(e.target.value)}
          />
        </label>
      </div>
    </section>
  );
}
