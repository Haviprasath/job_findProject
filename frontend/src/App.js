
import  Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login"
import Register from "./pages/Register";
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/home"  element={<Home />}></Route>
                <Route path="/About"  element={<About />}></Route>
                <Route path="/contact"  element={<Contact />}></Route>
                <Route path="/login"  element={<Login />}></Route>
                <Route path="/reg"  element={<Register />}></Route>
            </Routes>

        </BrowserRouter>


        <Footer/>
    </div>
  );
}

export default App;
