import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Settings from "./pages/Settings";
import './css/App.css';
import { useSelector, useDispatch } from 'react-redux'
import { account } from './features/reducers/userSlice';
import { login } from './features/reducers/authSlice';

function App() {
  const dispatch = useDispatch();


  useEffect(() => { // auto-login                      STILL NEEDS FIXING!!! DOES NOT WORK YET >:( 
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          handleAutoLogin(user)
        });
      }
    });
  }, []);

  function handleAutoLogin(user){
    dispatch(account(user));
    dispatch(login());
  }

  return (
    <BrowserRouter>
      <div className="App">
      <div className="Content">
      <Navbar/>
        <Routes>
          <Route path="/settings" element={<Settings />}/>
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