import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";
import Customer from "./pages/Customer";
import Admin from "./pages/Admin";
import Engineer from './pages/Engineer';
import React, { useState } from "react";
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Auth from "../src/hoc/Auth";

const ThemeContext = React.createContext();

function App() {


        const defaultMaterialTheme = createTheme();
        const [theme , setTheme] = useState("light");

  return (
    <div>
          <ThemeProvider theme={defaultMaterialTheme}>
           <ThemeContext.Provider value= {{theme, setTheme}}>
      <Router>
        <Routes>
          <Route path="/" element={ <Login/> } />
          <Route path="/customer" element={ <Auth> <Customer/> </Auth> } />
          <Route path="/customer/createTicket" element={ <Auth> <Customer/> </Auth> } />
          <Route path='/engineer' element= { <Auth> <Engineer/>  </Auth> } />
          <Route path='/admin' element={ <Auth> <Admin/> </Auth>} />
          <Route path='/admin/:userId' element={ <Auth> <Admin/> </Auth>} />
        </Routes>
      </Router>
      </ThemeContext.Provider> 
      </ThemeProvider>

    </div>
  );
}

export default App;

export {ThemeContext};
