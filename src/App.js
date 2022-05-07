import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/auth/PrivateRoute";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddItem from "./pages/AddItem";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import ManageInventory from "./pages/ManageInventory";
import MyItems from "./pages/MyItems";
import NotFound from "./pages/NotFound";
import Regester from "./pages/Regester";
import SignIn from "./pages/SignIn";
import UpdateInventory from "./pages/UpdateInventory";

function App() {
  return (
    <div className="max-w-7xl m-auto">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="inventory/:id" element={<UpdateInventory />} />
            <Route path="manageinventory" element={<ManageInventory/>}/>
            <Route path="additem" element={<AddItem/>}/>
            <Route path="myitems" element={<MyItems/>}/>
            <Route path="blog" element={<Blog />} />
          </Route>
          <Route path="/*" element={<NotFound/>}/>
          <Route path="/regester" element={<Regester />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
