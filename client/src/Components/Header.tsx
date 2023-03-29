import Nav from "./Nav";

const Header: React.FC = () => (
  <>
    <header>
      <div className="header__wrapper">
        <a>Fakelandia Justice Department</a>
        <Nav></Nav>
      </div>
    </header>
  </>
);

export default Header;