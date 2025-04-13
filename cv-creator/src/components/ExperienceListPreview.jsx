export default function ExperienceListPreview({ data }) {
  function formatMonthYear(dateStr) {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return `${month}-${year}`;
  }

  return (
    <section className="experience-preview">
      <h2>Experience</h2>
      <ul className="experience-preview__list">
        {data.map((experience) => (
          <li className="experience-preview__item">
            <div className="experience-preview__top">
              <div className="experience-preview__top--left">
                <h3>{experience.position}</h3>
                <p>{experience.company}</p>
              </div>
              <div className="experience-preview__top--right">
                <p>
                  <span>{experience.address}</span>
                  <span> | </span>
                  <span>{formatMonthYear(experience.startDate)}</span>
                  <span> - </span>
                  <span>
                    {experience.endDate
                      ? formatMonthYear(experience.endDate)
                      : "Current"}
                  </span>
                </p>
              </div>
            </div>
            <div className="experience-preview__description">
              <ul>
                {experience.description
                  .split("\n")
                  .filter((line) => line.trim() !== "")
                  .map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
