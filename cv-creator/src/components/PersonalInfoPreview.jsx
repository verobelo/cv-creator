export default function PersonalInfoPreview({ data }) {
  return (
    <section className="personal-info-preview">
      <h1>{data.name}</h1>
      <ul className="personal-info-preview__contacts">
        <li>
          <img src="email.png" alt="email icon" width={15} height={15} />
          {data.email}
        </li>
        <li>
          <img src="telephone.png" alt="phone icon" width={15} height={15} />
          {data.phone}
        </li>
        <li>
          <img src="location.png" alt="home icon" width={15} height={15} />
          {data.address}
        </li>
        <li>
          <img src="linkedin.png" alt="linkedin icon" width={15} height={15} />
          {data.linkedin}
        </li>
        <li>
          <img src="github.png" alt="github icon" width={15} height={15} />
          {data.github}
        </li>
        <li>
          <img src="web.png" alt="web icon" width={15} height={15} />
          {data.website}
        </li>
      </ul>
    </section>
  );
}
