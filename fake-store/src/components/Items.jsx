import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart, remove } from "../features/cart/cartSlice";

const Items = () => {
  const [items, setItems] = useState([]);

  const dispatch = useDispatch();

  const fetchItems = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
      {items.map((item) => {
        return (
          <div key={item.id} className="w-[350px]">
            <div className="card-body flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="h-[200px] my-2"
              />
            </div>
            <div className="card-body flex flex-col items-center ">
              <p>
                {item.title.length > 40
                  ? item.title.slice(0, 40) + "..."
                  : item.title}
              </p>
              <div className="flex gap-4 items-center my-2 w-[100%]">
                <p>price: ${item.price}</p>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="grow bg-red-500 rounded-md py-1 px-2 text-white "
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => dispatch(remove(item.id))}
                  className="grow bg-red-500 rounded-md py-1 px-2 text-white "
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Items;
