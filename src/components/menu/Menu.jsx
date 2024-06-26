import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  const handleclick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={handleclick}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={handleclick}>
          <a href="#portofolio">Portofolio</a>
        </li>
        <li onClick={handleclick}>
          <a href="#works">Works</a>
        </li>
        <li onClick={handleclick}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={handleclick}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
