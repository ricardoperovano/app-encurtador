import Link from "./components/link";
import Menu from "./components/menu";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import AuthorizedRoute from "./components/AuthorizedRoute";
import GuestRoute from "./components/GuestRoute";
import Login from "./components/login";
import Create from "./components/create";
import { Route } from "react-router-dom";

const App = ({ location }) => {
  return (
    <div className="container">
      <Menu />
      <AuthorizedRoute location={location} path="/" exact component={Link} />
      <GuestRoute location={location} path="/login" exact component={Login} />
      <Route location={location} path="/create" exact component={Create} />
    </div>
  );
};

export default App;
