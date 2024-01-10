import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { setProducts } from "../redux/slices/productsSlice";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        dispatch(setProducts(response.data.products));
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleByClick = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="items">
      {items &&
        items.map((item) => (
          <div className="item-card" key={item.id}>
            <img width={200} height={150} src={item.thumbnail} alt="items" />
            <div>
              <h3>{item.title}</h3>
              <p>{item.price} $</p>
              <button onClick={() => handleByClick(item)}>Купить</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
