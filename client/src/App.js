import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import './css/App.css';

function App() {

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => {
  //         setUser(user) REDUX PASSING THRU 
  //       });
  //     }
  //   });
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
      <div className="Content">
      <Navbar/>
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;