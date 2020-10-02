import React, { useState } from "react";
import { Menu, Input, Placeholder } from "semantic-ui-react";
import "./navbar.scss";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");

  const navbarItems = ["about", "insights", "work", "blog", "join", "contact"];

  const handleNav = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <div className="navbar">
      <Menu secondary className="mobile-menu">
        <Menu.Item>
          {" "}
          <Placeholder style={{ height: 50, width: 75 }}>
            <Placeholder.Image />
          </Placeholder>
        </Menu.Item>
        <Menu.Menu position="right">
          {navbarItems.map((item) => (
            <Menu.Item
              key={item}
              name={item}
              active={activeItem === item}
              onClick={handleNav}
            />
          ))}
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Navbar;
