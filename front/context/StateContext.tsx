import React, { useState, createContext, useContext } from "react";
import { toast } from "react-toastify";

interface StateContextProps {
  children: React.ReactNode;
}

interface Product {
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

interface StateContextValues {
  showCart: boolean;
  setShowCart: (value: boolean) => void;
  cartItems: Product[];
  totalPrice: number | null;
  totalQuantities: number;
  qty: number;
  incQty: () => void;
  decQty: () => void;
  onAdd: (product: Product, quantity: number) => void;
}

const Context = createContext<StateContextValues | undefined>(undefined);

const StateContext = ({ children }: StateContextProps) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCarItems] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const onAdd = (product: Product, quantity: number) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => (prevTotalPrice ?? 0) + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantity) => prevTotalQuantity + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        }
        return cartProduct;
      });

      setCarItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCarItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} adicionado no carrinho.`);
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  const stateContextValues: StateContextValues = {
    showCart,
    setShowCart,
    cartItems,
    totalPrice,
    totalQuantities,
    qty,
    incQty,
    decQty,
    onAdd,
  };

  return (
    <Context.Provider value={stateContextValues}>{children}</Context.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error(
      "useStateContext must be used within a StateContextProvider"
    );
  }
  return context;
};

export default StateContext;
