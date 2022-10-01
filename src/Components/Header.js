import { Link } from "react-router-dom";

import "./Style.css";

const Header = () => {
  return (
    <div>
      <ul className="nav">
        <li>
          <h1 style={{ color: "black" }}>React Context API</h1>
        </li>
        <li className="prod">
          <Link to="/">Home</Link>
        </li>
        <li className="prod1">
          <Link to="/cart">Cart </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
