import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import CourseTutorial from "./pages/CourseTutorial";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import './App.css';
function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-dark p-3 sticky-top ">
        <div className="container">
          <Link className="navbar-brand text-white fw-bold" to="/">Home</Link>
          <button
            className="navbar-toggler bg-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav1"

          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav1">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/courses">Courses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/profile">Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4 flex-grow-1 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/course/:id/tutorial" element={<CourseTutorial />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <div className="mt-5 py-3">
      <footer className="fixed-bottom position-fixed bottom-0 p-3 bg-dark text-light  fw-bold d-flex justify-content-center align-items-center  mt-auto sticky-down">
        <p>2025 My E-Learning All Rights reserved</p>
      </footer>
      </div>
    </Router>
  );
}

export default App;