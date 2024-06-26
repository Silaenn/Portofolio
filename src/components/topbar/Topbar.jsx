import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";

export default function Topbar({ menuOpen, setMenuOpen }) {
  const handleclick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={menuOpen ? "topbar active" : "topbar"}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Silaen.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+628 989 311 672</span>
          </div>

          <div className="itemContainer">
            <Mail className="icon" />
            <span>deokeldisilaen@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={handleclick}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
