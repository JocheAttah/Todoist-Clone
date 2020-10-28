import React from "react";
import { FaPizzaSlice } from "react-icons/fa";

function Header() {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="nav__logo">
          <img src="/images/logo.png" alt="Todoist" />
        </div>
        <div className="nav__settings">
          <ul>
            <li>+</li>
            <li>{FaPizzaSlice}</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
