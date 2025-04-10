import { useState } from "react";

export default function FoldableSection({ title, children, handleClear }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <section className="foldable-section">
      <div
        className="foldable-section__header header"
        role="button"
        aria-expanded={isOpen}
        tabIndex={0}>
        <img
          src={isOpen ? "/down-arrow.png" : "/chevron.png"}
          alt="toggle"
          width={25}
          height={25}
        />
        <h1 onClick={handleOpen}>{title}</h1>
        <button
          type="button"
          aria-label="Clear section"
          className="clear-button"
          onClick={handleClear}>
          <img
            src="/vacuum-cleaner.png"
            alt="vacuum cleaner icon"
            width={30}
            height={30}
          />
        </button>
      </div>
      <>{isOpen && children}</>
    </section>
  );
}
