import { NavLink } from "react-router-dom";

function NavBarPhoneItem({ children, to, onHandleNavBar }) {
  return (
    <li className="hover:text-orange-500">
      <button onClick={onHandleNavBar}>
        <NavLink to={to}>{children}</NavLink>
      </button>
    </li>
  );
}

export default NavBarPhoneItem;
