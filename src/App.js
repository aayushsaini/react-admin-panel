import "./app.scss";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UsersList from "./pages/usersList/UsersList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/ProductList/ProductsList";
import NewProduct from "./pages/newProduct/NewProduct";
import Product from "./pages/product/Product";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/users">
            <UsersList />
          </Route>
        </Switch>
        <Switch>
          <Route path="/user/:userId">
            <User />
          </Route>
        </Switch>
        <Switch>
          <Route path="/createUser">
            <NewUser />
          </Route>
        </Switch>
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
        <Switch>
          <Route path="/product/:productId">
            <Product />
          </Route>
        </Switch>
        <Switch>
          <Route path="/createProduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;