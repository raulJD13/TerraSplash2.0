import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FrontPage from "./pages/frontPage/FrontPage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import RegisterPageSecond from "./pages/registerPageSecond/RegisterPageSecond";
import HomePage from "./pages/homePage/HomePage";
import WaterActivitiesPage from "./pages/waterActivitiesPage/WaterActivitiesPage";
import LandaActivitiesPage from "./pages/landActivitiesPage/LandActivitiesPage";
import HikingPage from "./pages/hikingPage/HikingPage";
import ClimbingPage from "./pages/climbingPage/ClimbingPage";
import CyclingPage from "./pages/cyclingPage/CyclingPage";
import HorsebackPage from "./pages/horsebackPage/HorsebackPage";
import SkydivingPage from "./pages/skydivingPage/SkydivingPage";
import MotocrossPage from "./pages/motocrossPage/MotocrossPage";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/front" element={<FrontPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/registersecond" element={<RegisterPageSecond />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/waterActivities" element={<WaterActivitiesPage />} />
          <Route path="/landActivities" element={<LandaActivitiesPage />} />
          <Route path="/landActivities/hiking" element={<HikingPage />} />
          <Route path="/landActivities/climbing" element={<ClimbingPage />} />
          <Route path="/landActivities/cycling" element={<CyclingPage />} />
          <Route path="/landActivities/horseback" element={<HorsebackPage />} />
          <Route path="/landActivities/skydiving" element={<SkydivingPage />} />
          <Route path="/landActivities/motocross" element={<MotocrossPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
