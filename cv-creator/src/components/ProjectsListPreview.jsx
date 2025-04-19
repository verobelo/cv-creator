export default function ProjectsListPreview({ data }) {
  return (
    <section className="projects-preview">
      <h2>Projects</h2>
      <div
        style={{
          height: "2px",
          width: "100%",
          backgroundColor: "rgb(199, 198, 198)",
          display: "block",
          margin: "0.3rem 0",
        }}></div>
      <ol className="projects-preview__list">
        {data.map((project) => (
          <li className="project-preview__item" key={project.id}>
            <h3>
              {project.name} ({project.technologies})
            </h3>
            <p>{project.description}</p>
            <div className="project-preview__links">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer">
                  Demo
                </a>
              )}
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer">
                  Code
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
