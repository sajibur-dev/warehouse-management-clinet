import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/auth/PrivateRoute";
import Footer from "./components/Footer";
import Header from "./components/Header";
import auth from "./firebase";
import AddItem from "./pages/AddItem";
import AddReview from "./pages/AddReview";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import ManageInventory from "./pages/ManageInventory";
import MyItems from "./pages/MyItems";
import NotFound from "./pages/NotFound";
import Regester from "./pages/Regester";
import SignIn from "./pages/SignIn";
import UpdateInventory from "./pages/UpdateInventory";

function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      
      <header>
        <Header/> 
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="inventory/:id" element={<UpdateInventory />} />
            <Route path="manageinventory" element={<ManageInventory/>}/>
            <Route path="additem" element={<AddItem/>}/>
            <Route path="myitems" element={<MyItems/>}/>
            <Route path="addReview" element={<AddReview/>}/>
          </Route>
          <Route path="blog" element={<Blog />} />
          <Route path="/*" element={<NotFound/>}/>
          <Route path="/regester" element={<Regester />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
