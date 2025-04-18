export default function PersonalInfoForm({ data, updateData }) {
  return (
    <section className="personal-info">
      <div className="personal-info__form form">
        <label>
          <strong>Full Name:</strong>
          <input
            type="text"
            name="name"
            placeholder="e.g. Java SCRIPSTON"
            value={data.name}
            onChange={(e) => updateData({ ...data, name: e.target.value })}
          />
        </label>
        <label>
          <strong>Email:</strong>
          <input
            type="email"
            name="email"
            placeholder="e.g java.scripston@gmail.com"
            value={data.email}
            onChange={(e) => updateData({ ...data, email: e.target.value })}
          />
        </label>
        <label>
          <strong>Phone Number:</strong>
          <input
            type="tel"
            name="phone"
            placeholder="e.g. (+123)404-NOT-FOUND"
            value={data.phone}
            onChange={(e) => updateData({ ...data, phone: e.target.value })}
          />
        </label>

        <label>
          <strong>Linkedin:</strong>
          <input
            type="text"
            name="linkedin"
            placeholder="e.g. linkedin.com/in/javascripston"
            value={data.linkedin}
            onChange={(e) => updateData({ ...data, linkedin: e.target.value })}
          />
        </label>
        <label>
          <strong>GitHub or Portfolio:</strong>
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
