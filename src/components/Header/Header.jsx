import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <header>
      {/* Mobile Menu Icon */}
      <nav>
        <div className="navtop">
          <h3>
            <Link
              to="/"
              className="project-title"
            >
              EFFE Technology
            </Link>
          </h3>
        </div>
      </nav>
    </header>
  );
};

export default Header;
