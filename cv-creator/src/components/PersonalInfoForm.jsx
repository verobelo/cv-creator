import { translations } from "../logic/translation";
import { useForm } from "react-hook-form";

export default function PersonalInfoForm({ data, updateData, language }) {
  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: data,
    mode: "onChange",
  });

  const onChangeField = (field, value) => {
    updateData({ ...data, [field]: value });
  };

  return (
    <section className="personal-info">
      <form className="personal-info__form form">
        <label>
          <strong>{translations[language].fullName}*:</strong>
          <input
            {...register("name", {
              required: true,
              maxLength: 70,
              pattern: /^[a-zA-Z\s]+$/,
            })}
            autoFocus
            type="text"
            name="name"
            placeholder="e.g. Java SCRIPSTON"
            value={data.name}
            onChange={(e) => onChangeField("name", e.target.value)}
          />
        </label>
        <label>
          <strong>{translations[language].email}*:</strong>
          <input
            {...register("email", {
              required: true,
              validate: (value) => value.includes("@") && value.length > 5,
            })}
            type="email"
            name="email"
            placeholder="e.g java.scripston@gmail.com"
            value={data.email}
            onChange={(e) => onChangeField("email", e.target.value)}
          />
        </label>
        <label>
          <strong>{translations[language].phone}:</strong>
          <input
            {...register("phone", {
              pattern: /^\+?[0-9\s-]+$/,
            })}
            type="tel"
            name="phone"
            placeholder="e.g. (+123)404-NOT-FOUND"
            value={data.phone}
            onChange={(e) => onChangeField("phone", e.target.value)}
          />
        </label>

        <label>
          <strong>{translations[language].linkedin}:</strong>
          <input
            type="text"
            name="linkedin"
            placeholder="e.g. linkedin.com/in/javascripston"
            value={data.linkedin}
            onChange={(e) => onChangeField("linkedin", e.target.value)}
          />
        </label>
        <label>
          <strong>{translations[language].github}:</strong>
          <input
            type="text"
            name="github"
            placeholder="e.g. github.io/javascripston"
            value={data.github}
            onChange={(e) => onChangeField("github", e.target.value)}
          />
        </label>
      </form>
    </section>
  );
}
