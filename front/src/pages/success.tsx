import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../../context/StateContext";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-2">
      <div className="bg-gray-300 p-8 rounded-lg flex flex-col justify-center items-center">
        <p className="text-green-500 text-4xl mb-4">
          <BsBagCheckFill />
        </p>
        <h2 className="text-4xl font-bold mb-4 text-center">
          Obrigado por comprar conosco!
        </h2>
        <p className="text-lg text-center mb-4">
          Confira seu e-mail para ver os detalhes de sua compra.
        </p>
        <p className="text-lg text-center mb-4">
          Qualquer dúvida, entre em contato com a gente:
          <a
            className="text-red-500 font-bold ml-2"
            href="mailto:capuanomusic@music.com"
          >
            capuanomusic@music.com
          </a>
        </p>
        <Link href="/">
          <button
            type="button"
            width="300px"
            className="w-64 py-2 px-4 bg-blue-500 text-white rounded-lg text-xl "
          >
            Continue comprando
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
