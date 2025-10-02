export default function PersonalInfoPreview({ data }) {
  return (
    <section className='personal-info-preview'>
      <h1 style={{ marginBottom: '0.5rem' }}>{data.name}</h1>
      <ul className='personal-info-preview__contacts'>
        <li>
          {data.email && (
            <img src='email.png' alt='email icon' width={15} height={15} />
          )}
          <span>{data.email}</span>
        </li>
        <li>
          {data.phone && (
            <img src='telephone.png' alt='phone icon' width={15} height={15} />
          )}
          {data.phone}
        </li>

        <li>
          {data.linkedin && (
            <img
              src='linkedin.png'
              alt='linkedin icon'
              width={15}
              height={15}
            />
          )}
          {data.linkedin}
        </li>
        <li>
          {data.github && (
            <img src='web.png' alt='github icon' width={15} height={15} />
          )}
          {data.github}
        </li>
      </ul>
    </section>
  );
}
