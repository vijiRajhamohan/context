import { useContext, useEffect, useState } from "react";
import "./Home.css";

import { FetchData } from "../Service/Api";
import { Cartcontext } from "../Context/Context";

const Home = () => {
  const [data, setdata] = useState([]);

  // From service file
  const fetchData = FetchData();
  const getItems = async () => {
    const result = await fetchData.getProducts();
    setdata(result.data);
  };
  useEffect(() => {
    getItems();
  }, []);

  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  return (
    <div className="home">
      {data.map((item, index) => {
        item.quantity = 1;
        return (
          <div className="card" key={index}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <h3>$. {item.price}</h3>
            <button onClick={() => dispatch({ type: "ADD", payload: item })}>
              add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
