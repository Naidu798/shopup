import React from "react";

import "./index.css";

const navItems = [
  {
    id: 1,
    name: "shop",
  },
  {
    id: 2,
    name: "skills",
  },
  {
    id: 3,
    name: "stories",
  },
  {
    id: 4,
    name: "about",
  },
  {
    id: 5,
    name: "contact us",
  },
];

const NavMenu = () => {
  return (
    <div className="nav-container">
      <ul className="nav-menu">
        {navItems.map((item) => {
          return (
            <li key={item.id}>
              <span className="nav-item">{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavMenu;
