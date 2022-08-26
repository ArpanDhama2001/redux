import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const qty = 1;

  return (
    <>
      {cart?.map((item) => {
        return (
          <article
            key={item.id}
            className="flex justify-between items-center w-[100%] lg:w-[60%]"
          >
            <div className="product">
              <img src={item.image} alt={item.name} className="h-[100px]" />
              <div className="product-details">
                <p>price: ${item.price}</p>
              </div>
            </div>
            <div className="quantity flex gap-2">
              <button>-</button>
              <p>{qty}</p>
              <button>+</button>
            </div>
            <div className="subtotal">
              <p>{qty * item.price}</p>
            </div>
            <div className="action">
              <button onClick={() => dispatch(remove(item.id))} className="">
                Remove
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Cart;
