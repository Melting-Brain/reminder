// import react from 'react'
import { Link } from "react-router-dom";
import "../Style/Nav.css";

const Nav = () => {
  return (
    <div className="container">
      <Link to="/">
        <div className="btn nav_btn">
          <span>Main</span>
        </div>
      </Link>
      <Link to="/todolist">
        <div className="btn nav_btn">
          <span>ToDo</span>
        </div>
      </Link>
      <Link to="/reminder">
        <div className="btn nav_btn">
          <span>Reminder</span>
        </div>
      </Link>
    </div>
  );
};
export default Nav;
