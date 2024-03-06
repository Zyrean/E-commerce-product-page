import NavBarPhoneItem from "./NavBarPhoneItem";

function NavBarPhone({ onHandleNavBar }) {
  return (
    <div className="">
      <div className="absolute z-50 h-screen w-3/5 space-y-12 bg-white pl-6 pt-6">
        <button onClick={onHandleNavBar}>
          <img src="../../images/icon-close.svg" alt="" />
        </button>

        <ul className="cursor-pointer space-y-4 text-xl font-bold ">
          <NavBarPhoneItem to="/collections" onHandleNavBar={onHandleNavBar}>
            Collections
          </NavBarPhoneItem>
          <NavBarPhoneItem to="menShoes" onHandleNavBar={onHandleNavBar}>
            Men
          </NavBarPhoneItem>
          <NavBarPhoneItem to="womenShoes" onHandleNavBar={onHandleNavBar}>
            Women
          </NavBarPhoneItem>
          <NavBarPhoneItem to="kids" onHandleNavBar={onHandleNavBar}>
            Kids
          </NavBarPhoneItem>
          <NavBarPhoneItem to="contact" onHandleNavBar={onHandleNavBar}>
            Contact
          </NavBarPhoneItem>
        </ul>
      </div>
    </div>
  );
}

export default NavBarPhone;
