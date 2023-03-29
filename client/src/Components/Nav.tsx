import { NavLink } from "react-router-dom";

const Nav: React.FC = () => {
  const activeClassName = "nav-active";
  return (
    <>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink
          to="/misdemeanours"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Misdemeanours
        </NavLink>
        <NavLink
          to="/confession"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Confession
        </NavLink>
      </nav>
    </>
  );
}


export default Nav;