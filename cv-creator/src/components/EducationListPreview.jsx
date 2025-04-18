export default function EducationListPreview({ data }) {
  function formatMonthYear(dateStr) {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return `${month}-${year}`;
  }
  return (
    <section className="education-preview">
      <h2>Education & Certifications</h2>
      <div
        style={{
          height: "5px",
          width: "100%",
          backgroundColor: "rgb(199, 198, 198)",
          display: "block",
          margin: "0.5rem 0",
        }}></div>
      <ul className="education-preview__list">
        {data.map((education) => (
          <li className="education-preview__item" key={education.id}>
            <div className="education-preview__item--left">
              <h3>{education.degree}</h3>
            </div>
            <div className="education-preview__item--right">
              <p>
                <span>{education.institution}</span>
                <span> | </span>
                <span>{formatMonthYear(education.completionDate)}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
