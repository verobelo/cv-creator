export default function PersonalInfoPreview({ data }) {
  return (
    <section className="personal-info-preview">
      <h1 style={{ marginBottom: "0.5rem" }}>{data.name}</h1>
      <ul className="personal-info-preview__contacts">
        <li>
          <img src="email.png" alt="email icon" width={15} height={15} />
          <span>{data.email}</span>
        </li>
        <li>
          <img src="telephone.png" alt="phone icon" width={15} height={15} />
          {data.phone}
        </li>

        <li>
          <img src="linkedin.png" alt="linkedin icon" width={15} height={15} />
          {data.linkedin}
        </li>
        <li>
          <img src="web.png" alt="github icon" width={15} height={15} />
          {data.github}
        </li>
      </ul>
    </section>
  );
}
