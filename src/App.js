import "./App.css";
//Import route and our components
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Nav from "./components/Nav";
import Header from "./components/Header"


export default function App () {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/currencies" element={<Currencies/>}/>
      <Route path="/price" element={<Price/>}/>
    </Routes>
    </div>
  );
}