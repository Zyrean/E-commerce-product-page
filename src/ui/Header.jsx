import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import NavBarPhone from "./NavBarPhone";
import Cart from "../features/cart/Cart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const [navBarIsOpen, setNavBarIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const cart = useSelector((state) => state.cart.cart);
  const emtpyCart = cart.length === 0;

  const navigate = useNavigate();

  // Wann genau benutze ich einen UseEffect ?
  // useEffect(function () {}, []);

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

          {cartIsOpen && <Cart />}

          <header className="flex items-center justify-between px-4 py-6 lg:border-b-2 lg:py-1">
            <div className="flex items-center justify-center gap-4 lg:gap-16">
              <button
                className="my-auto cursor-pointer lg:hidden"
                onClick={handleNavBar}
              >
                <img src="../../images/icon-menu.svg" alt="" />
              </button>

              <button
                className="0 my-auto"
                onClick={() => navigate("/collections")}
              >
                <img src="../../images/logo.svg" className="lg:h-6" alt="" />
              </button>

              <NavBar />
            </div>

            <div className="flex items-center gap-4 lg:gap-8">
              <button onClick={handleCart} className="relative">
                {!emtpyCart && (
                  <div className="absolute bottom-3 left-2 flex items-center justify-center rounded-xl bg-orange-500 px-2 lg:bottom-5 lg:left-4">
                    <span className="text-[10px] font-semibold text-white">
                      {cart.length}
                    </span>
                  </div>
                )}

                <img
                  className="lg:h-5"
                  src="../../images/icon-cart.svg"
                  alt=""
                />
              </button>

              <div className="rounded-full px-0.5 py-0.5 hover:cursor-pointer hover:bg-orange-500">
                <img
                  src="../../images/image-avatar.png"
                  alt=""
                  className="h-8 lg:h-12"
                />
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}

export default Header;
