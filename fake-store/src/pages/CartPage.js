import React from "react";
import Cart from "../components/Cart";

const CartPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[90%] flex justify-center items-center flex-col gap-6">
        <Cart />
      </div>
    </div>
  );
};

export default CartPage;
