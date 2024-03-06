import { NavLink } from "react-router-dom";

function NavBar() {
  const navStyle =
    "py-12 hover:border-b-4 hover:border-orange-500 hover:font-semibold hover:text-black focus:font-semibold focus:text-black transition-all duration-150 font-normal";

  return (
    <>
      <nav className="hidden gap-8 text-xl font-light text-stone-500 lg:flex ">
        <NavLink to="/collections" className={navStyle}>
          Collections
        </NavLink>
        <NavLink to="/menShoes" className={navStyle}>
          Men
        </NavLink>
        <NavLink to="/womenShoes" className={navStyle}>
          Women
        </NavLink>
        <NavLink to="/kids" className={navStyle}>
          Kids
        </NavLink>
        <NavLink to="/contact" className={navStyle}>
          Contact
        </NavLink>
      </nav>
    </>
  );
}

export default NavBar;
