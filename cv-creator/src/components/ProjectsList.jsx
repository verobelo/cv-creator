import Project from "./Project";

export default function ProjectsList({ data, updateData, onAddProject }) {
  function handleChangeInputValue(projectId, key, newValue) {
    updateData((prevList) =>
      prevList.map((project) =>
        project.id === projectId ? { ...project, [key]: newValue } : project
      )
    );
  }

  function handleRemoveProject(projectId) {
    const updatedList = (prevList) =>
      prevList.filter((project) => project.id !== projectId);
    updateData(updatedList);
  }

  const isEmpty = data.length === 0;
  return (
    <section className="projects">
      <div className="projects__form">
        <button type="button" onClick={onAddProject}>
          + Add
        </button>
        <ul className={!isEmpty ? "form" : ""}>
          {data.map((project) => (
            <li key={project.id}>
              <Project
                id={project.id}
                name={project.name}
                technologies={project.technologies}
                description={project.description}
                code={project.code}
                demo={project.demo}
                onChange={handleChangeInputValue}
                onRemove={handleRemoveProject}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
