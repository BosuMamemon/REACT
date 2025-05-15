import {BrowserRouter, Route, Routes} from "react-router-dom";

import './css/App.css'
import Navigation from "./components/Navigation.jsx";
import Home from "./routers/Home.jsx";
import About from "./routers/About.jsx";

function App() {
  return (
      <BrowserRouter>
          <Navigation/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
