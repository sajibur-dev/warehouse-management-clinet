import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/auth/PrivateRoute";
import Header from "./components/Header";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Regester from "./pages/Regester";
import SignIn from "./pages/SignIn";

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
            
          </Route>
          <Route path="/blog" element={<Blog />} />
          <Route path="/regester" element={<Regester/>}/>
          <Route path="/signin" element={<SignIn/>}/>
        </Routes>
      </main>
      <footer>
        <p>this is footer</p>
      </footer>
    </div>
  );
}

export default App;
