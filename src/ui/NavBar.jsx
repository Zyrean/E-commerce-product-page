import { NavLink } from "react-router-dom";

function NavBar({ type }) {
  return (
    <>
      {type === "desktop" ? (
        <nav>
          <NavLink to="/collections">Collections</NavLink>
          <NavLink to="/menShoes">Men</NavLink>
          <NavLink to="/womenShoes">Women</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      ) : null}
    </>
  );
}

export default NavBar;
