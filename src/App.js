import React from "react";
import { BrowserRouter,Route } from 'react-router-dom';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App () {
    return(
    <BrowserRouter> 
        <div className="App">
            <Navbar />
            <Route path='/' component={Home}/>
        </div>
    </BrowserRouter>   
    );
}

export default App;