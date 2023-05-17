import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import NavBar from "../../Components/NavBar/NavBar.jsx";
import Header from "../../Components/Header/Header.jsx";
import ProfileInfo from "../ProfileInfo/ProfileInfo.jsx"
import Projects from "../Proyects/Projects.jsx"

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <Router>

      <div className="nav">
            <NavBar/>
      </div>

      <div className="center">       
        <Header/>

      <Routes>

        <Route path="/host" element={<ProfileInfo/>}/>
        <Route path="/host/proyects" element={<Projects/>}/>

      </Routes>

      </div>
      
    </Router>
  );
}

export default App;
