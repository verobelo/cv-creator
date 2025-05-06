export default function FormButtonsGroup({
  onPrint,
  onClearAll,
  onToggleLanguage,
  language,
}) {
  return (
    <div className="buttons">
      <button type="button" className="print-button" onClick={onPrint}>
        <img
          src="printer.png"
          aria-label="print cv"
          alt="printer icon"
          width={35}
          height={35}
        />
      </button>
      <button type="button" className="clear-all-button" onClick={onClearAll}>
        <img
          src="./vacuum-cleaner.png"
          alt="vacuum cleaner icon"
          aria-label="clear all sections"
          width={35}
          height={35}
        />
      </button>
      <button
        type="button"
        className="language-toggle-button"
        aria-label="toggle language"
        onClick={onToggleLanguage}>
        {language === "en" ? <Spanish /> : <English />}
      </button>
    </div>
  );
}
