import logo from "../../assets/img/dsmeta.png"
import "./styles.css"

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por: 
          <a href="https://www.instagram.com/warleymts"> @warleymts</a>
        </p>
      </div>
    </header>
  );
}

export default Header;
