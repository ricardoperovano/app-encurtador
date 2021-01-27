import React from "react";
import { withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const NavMenu = ({ history }) => {
  const handleLogOut = () => {
    sessionStorage.removeItem("token");

    history.push("/login");
  };

  return (
    <Menu>
      <Menu.Item header onClick={() => history.push("/")}>
        Encurtador
      </Menu.Item>

      <Menu.Item
        position="right"
        name="nova"
        onClick={() => history.push("/create")}
      >
        Nova Url
      </Menu.Item>

      {sessionStorage.token ? (
        <Menu.Item name="sair" onClick={handleLogOut}>
          Sair
        </Menu.Item>
      ) : (
        <Menu.Item name="sair" onClick={() => history.push("/login")}>
          Login
        </Menu.Item>
      )}
    </Menu>
  );
};

export default withRouter(NavMenu);
