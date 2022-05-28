import { Home, News, Contact, About } from "./Components/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {
  NavLink,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light shadow p-3 mb-2 rounded-bottom">
          <div className="container">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={"/"} className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/News"} className="nav-link">
                  News
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/Contact"} className="nav-link">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/About"} className="nav-link">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
