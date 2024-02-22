import { useState } from "react";
import NavBar from "./NavBar";
import NavBarPhone from "./NavBarPhone";
import Cart from "../features/cart/Cart";

function Header() {
  const [navBarIsOpen, setNavBarIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cart, setCart] = useState([]);

  function handleNavBar() {
    setNavBarIsOpen(!navBarIsOpen);
  }

  function handleCart() {
    setCartIsOpen(!cartIsOpen);
  }

  return (
    <>
      <div className="sticky top-0 z-50 bg-white ">
        <div className=" relativ">
          {navBarIsOpen && <NavBarPhone onHandleNavBar={handleNavBar} />}

          {cartIsOpen && <Cart cart={cart} />}

          <header className="flex items-center justify-between px-6 py-6">
            <div className="flex justify-center gap-4">
              <button className="my-auto cursor-pointer" onClick={handleNavBar}>
                <img src="../../images/icon-menu.svg" alt="" />
              </button>
              <div className="my-auto">
                <img src="../../images/logo.svg" alt="" />
              </div>
              <NavBar />
            </div>

            <div className="flex items-center gap-6">
              <button onClick={handleCart}>
                <img src="../../images/icon-cart.svg" alt="" />
              </button>
              <div className="h-6 w-6">
                <img src="../../images/image-avatar.png" alt="" />
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}

export default Header;
