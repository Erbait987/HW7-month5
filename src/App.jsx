import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./page/Cart";
import Layout from "./components/Layout";
import Home from "./page/Home";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
