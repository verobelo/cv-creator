import { translations } from "../logic/translation";

export default function PersonalInfoForm({ data, updateData, language }) {
  return (
    <section className="personal-info">
      <div className="personal-info__form form">
        <label>
          <strong>{translations[language].fullName}:</strong>
          <input
            type="text"
            name="name"
            placeholder="e.g. Java SCRIPSTON"
            value={data.name}
            onChange={(e) => updateData({ ...data, name: e.target.value })}
          />
        </label>
        <label>
          <strong>{translations[language].email}:</strong>
          <input
            type="email"
            name="email"
            placeholder="e.g java.scripston@gmail.com"
            value={data.email}
            onChange={(e) => updateData({ ...data, email: e.target.value })}
          />
        </label>
        <label>
          <strong>{translations[language].phone}:</strong>
          <input
            type="tel"
            name="phone"
            placeholder="e.g. (+123)404-NOT-FOUND"
            value={data.phone}
            onChange={(e) => updateData({ ...data, phone: e.target.value })}
          />
        </label>

        <label>
          <strong>{translations[language].linkedin}:</strong>
          <input
            type="text"
            name="linkedin"
            placeholder="e.g. linkedin.com/in/javascripston"
            value={data.linkedin}
            onChange={(e) => updateData({ ...data, linkedin: e.target.value })}
          />
        </label>
        <label>
          <strong>{translations[language].github}:</strong>
          <input
            type="text"
            name="github"
            placeholder="e.g. github.io/javascripston"
            value={data.github}
            onChange={(e) => updateData({ ...data, github: e.target.value })}
          />
        </label>
      </div>
    </section>
  );
}
