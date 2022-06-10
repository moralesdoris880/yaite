import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import './css/App.css';
import { useSelector, useDispatch } from 'react-redux'
import { account } from './features/reducers/userSlice';

function App() {
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()


  useEffect(() => { // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          dispatch(account(user))
        });
      }
    });
  }, []);

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