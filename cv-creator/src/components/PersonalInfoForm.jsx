import { translations } from "../logic/translation";

export default function PersonalInfoForm({
  data,
  updateData,
  language,
  errors,
  setErrors,
}) {
  const translation = translations[language];

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    if (name === "name") {
      newErrors.name = value.trim() ? "" : translation.nameError;
    }

    if (name === "email") {
      newErrors.email =
        value.includes("@") && value.length > 5 ? "" : translation.emailError;
    }

    if (name === "phone") {
      newErrors.phone =
        value === "" || /^(\+|\(\+?\d{1,4}\)|\d)[\d\s\-()]{5,}$/.test(value)
          ? ""
          : translation.phoneError;
    }

    if (name === "linkedin" || name === "github") {
      newErrors[name] =
        value === "" || value.includes(".") ? "" : translation.websiteError;
    }

    setErrors(newErrors);
  };

  const handleChange = (field, value) => {
    updateData({ ...data, [field]: value });
    validateField(field, value);
  };

  return (
    <section className="personal-info">
      <div className="personal-info__form form">
        <label>
          <strong>{translations[language].fullName}*:</strong>
          <input
            autoFocus
            type="text"
            name="name"
            placeholder="e.g. Java SCRIPSTON"
            value={data.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={errors.name ? "invalid" : ""}
          />
        </label>
        {errors.name && <span className="error">{errors.name}</span>}
        <label>
          <strong>{translations[language].email}*:</strong>
          <input
            type="email"
            name="email"
            placeholder="e.g java.scripston@gmail.com"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={errors.email ? "invalid" : ""}
          />
        </label>
        {errors.email && <span className="error">{errors.email}</span>}
        <label>
          <strong>{translations[language].phone}:</strong>
          <input
            type="tel"
            name="phone"
            placeholder="e.g. (+123)404-NOT-FOUND"
            value={data.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className={errors.phone ? "invalid" : ""}
          />
        </label>
        {errors.phone && <span className="error">{errors.phone}</span>}
        <label>
          <strong>{translations[language].linkedin}:</strong>
          <input
            type="text"
            name="linkedin"
            placeholder="e.g. linkedin.com/in/javascripston"
            value={data.linkedin}
            onChange={(e) => handleChange("linkedin", e.target.value)}
            className={errors.linkedin ? "invalid" : ""}
          />
        </label>
        {errors.linkedin && <span className="error">{errors.linkedin}</span>}

        <label>
          <strong>{translations[language].github}:</strong>
          <input
            type="text"
            name="github"
            placeholder="e.g. github.io/javascripston"
            value={data.github}
            onChange={(e) => handleChange("github", e.target.value)}
            className={errors.github ? "invalid" : ""}
          />
        </label>
        {errors.github && <span className="error">{errors.github}</span>}
      </div>
    </section>
  );
}
