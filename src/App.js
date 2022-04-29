import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

function App() {
  return (
    <div className="max-w-7xl m-auto">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <footer>
        <p>this is footer</p>
      </footer>
    </div>
  );
}

export default App;
