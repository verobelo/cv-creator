function App() {
  return (
    <div className="cv-container">
      <Header />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <img src="./public/typewriter.png" alt="logo" width={48} height={48} />
      <h2>My Resume Writer.</h2>
    </header>
  );
}
function CVForm() {}
function CVPreview() {}
function Footer() {
  return (
    <footer>
      <a
        href="https://www.flaticon.com/free-icons/typewriter"
        title="typewriter icons">
        Typewriter icons created by <strong>ghost_icon</strong> - Flaticon
      </a>
    </footer>
  );
}

export default App;
