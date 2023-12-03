import './App.css';
import AllUsers from './components/AllUsers';
import Navbarr from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbarr />
       <Router>
    <Routes>
      <Route exact path="/page/:pageNumber" element={<AllUsers/>} />
      <Route exact path="/" element={<AllUsers/>} />
    </Routes>
  </Router>,
            
                  
             
    </div>
  );
}

export default App;
