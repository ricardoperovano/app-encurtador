import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

const NavMenu = () => {
  const [activeItem, setActiveItem] = useState();

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu stackable>
      <Menu.Item>Encurtador</Menu.Item>

      <Menu.Item
        position="right"
        name="sair"
        active={activeItem === "sair"}
        onClick={handleItemClick}
      >
        Sair
      </Menu.Item>
    </Menu>
  );
};

export default NavMenu;
