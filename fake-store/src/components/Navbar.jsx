import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector((state) => state.cart.length);
  return (
    <nav className=" flex items-center justify-center mb-10 h-[100px]">
      <div className="flex items-center justify-between w-[90%] md:w-[80%]">
        <div className="text-[24px]">
          fake <span className="text-red-600">Store</span>
        </div>
        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <button className="">Cart Count: {count}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
