import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import getStripe from "../../../lib/getStripe";
import { useStateContext } from "../../../context/StateContext";
import { urlFor } from "../../../lib/client";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div
      className="w-screen fixed inset-0 flex items-center justify-end bg-black bg-opacity-50 z-100 transition-all duration-1000 ease-in-out"
      ref={cartRef}
    >
      <div className="h-screen w-96 bg-white float-right py-10 px-5 relative">
        <button
          type="button"
          className="flex items-center text-base font-medium cursor-pointer space-x-1 ml-4 border-none bg-transparent"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="ml-2">Your Cart</span>
          <span className="ml-2 text-red-500">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="mt-10 text-center">
            <AiOutlineShopping className="mx-auto" size={150} />
            <h3 className="font-semibold text-lg">
              Seu carrinho está vazio :(
            </h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="w-full max-w-md px-4 py-2 rounded-lg border-none text-base font-medium text-white uppercase bg-red-500 hover:bg-red-800 transform transition duration-500 ease"
              >
                Continue comprando
              </button>
            </Link>
          </div>
        )}

        <div className="mt-10">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="px-5 py-3" key={item._id}>
                <img
                  src={urlFor(item?.image[0]).url()}
                  alt={item.name}
                  className="w-1/4 h-1/4"
                />
                <div className="w-42">
                  <div className="flex flex-wrap gap-10">
                    <h5 className="text-base text-blue-900">{item.name}</h5>
                    <h4 className="text-base text-black">${item.price}</h4>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="cursor-pointer text-red-500"
                        onClick={() => toggleCartItemQuanitity(item._id, "dec")}
                      >
                        <AiOutlineMinus className="text-xl" />
                      </button>
                      <span className="text-base">{item.quantity}</span>
                      <button
                        type="button"
                        className="cursor-pointer text-green-500"
                        onClick={() => toggleCartItemQuanitity(item._id, "inc")}
                      >
                        <AiOutlinePlus className="text-base" />
                      </button>
                    </div>
                    <button
                      type="button"
                      className="text-red-500 text-2xl mt-4 bg-transparent border-none"
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {cartItems.length >= 1 && (
          <div className="p-8">
            <div className="flex justify-between">
              <h3 className="text-base">Subtotal:</h3>
              <h3 className="text-base">${totalPrice}</h3>
            </div>
            <div className="w-full mx-auto">
              <button
                type="button"
                className="w-full max-w-96 px-3 py-2 rounded-2xl border-none text-base mt-4 bg-red-500 text-white cursor-pointer transform transition-transform duration-500 hover:scale-110"
                onClick={handleCheckout}
              >
                Pagar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
