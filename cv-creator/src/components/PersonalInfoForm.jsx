import { translations } from "../logic/translation";
import { useForm } from "react-hook-form";

export default function PersonalInfoForm({ data, updateData, language }) {
  const { register } = useForm({
    defaultValues: data,
    mode: "onChange",
  });

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
            onChange={(e) => updateData({ ...data, name: e.target.value })}
          />
        </label>
        <label>
          <strong>{translations[language].email}*:</strong>
          <input
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
            autoFocus
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
            {...register("phone", {
              pattern: /^\+?[0-9\s-]+$/,
            })}
            autoFocus
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
      </form>
    </section>
  );
}
