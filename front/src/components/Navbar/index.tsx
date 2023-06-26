import Link from "next/link";
import { useState } from "react";
import { IoCloseSharp, IoMenu, IoCart } from "react-icons/io5";
import { useStateContext } from "../../../context/StateContext";
import Cart from "../Cart";
interface StateContextType {
  showCart: boolean;
  setShowCart: (value: boolean) => void;
  totalQuantities: number;
}

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const { showCart, setShowCart, totalQuantities } =
    useStateContext() as StateContextType;
  return (
    <div>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10 shadow-md">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-black font-bold ">
                  Cap<span className="text-blue-500">u</span>a
                  <span className="text-blue-500">n</span>o
                  <span className="text-blue-500">Music</span>
                </h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-blue-500 rounded-md outline-none focus:border-blue-800 "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <IoCloseSharp width={30} height={30} />
                  ) : (
                    <IoMenu
                      width={30}
                      height={30}
                      className=" active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className=" text-xl text-black font-bold py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-500  border-blue-500  md:hover:text-blue-800 md:hover:bg-transparent">
                  <Link href="/blog" onClick={() => setNavbar(!navbar)}>
                    Blog
                  </Link>
                </li>
                <li className="md:flex text-xl text-black  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-500  border-blue-500  md:hover:text-blue-800 md:hover:bg-transparent">
                  <button
                    className="relative cursor-pointer "
                    onClick={() => setShowCart(true)}
                  >
                    <IoCart size={25} color="black" />
                    <span className="absolute bg-red-500 -right-4 -top-1 text-white text-center rounded-full w-4 h-4 text-xs">
                      {totalQuantities}
                    </span>
                  </button>
                </li>
                {showCart && <Cart />}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
