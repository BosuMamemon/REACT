import './css/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./component/Navigation.jsx";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Detail from "./component/Detail.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
