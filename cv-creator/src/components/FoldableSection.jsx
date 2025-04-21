import { useState } from "react";
import ClearButton from "./ClearButton";

export default function FoldableSection({ title, children, handleClear }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <section className="foldable-section">
      <div
        className="foldable-section__header header"
        role="button"
        aria-expanded={isOpen}
        tabIndex={0}
        onClick={handleOpen}>
        <img
          src={isOpen ? "/down-arrow.png" : "/chevron.png"}
          alt="toggle"
          width={25}
          height={25}
        />
        <h1>{title}</h1>
        <ClearButton onClear={handleClear} />
      </div>
      <>{isOpen && children}</>
    </section>
  );
}
