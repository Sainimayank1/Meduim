import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home.js";
import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";
import Navbar from "./components/Navbar.js";
import Dashboard from "./components/Dashboard.js";
import { useSelector } from 'react-redux';
import NotFound from "./components/auth/NotFound.jsx";
import Create from "./components/Create.jsx";


function App() {
  const { user } = useSelector(state => state.authReducer);
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={user ? <Home /> : <Login/>} />
          <Route path="/login" exact element={user ? <Dashboard/> : <Login/>} />
          <Route path="/register" exact element={user ? <Dashboard/> : <Register/>} />
          <Route path="/dashboard" exact element={user ? <Dashboard/> : <Login/>} />
          <Route path="/create" exact element={user ? <Create/> : <Login/>} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
