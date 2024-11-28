import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FrontPage from "./pages/frontPage/FrontPage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import RegisterPageSecond from "./pages/registerPageSecond/RegisterPageSecond";
import HomePage from "./pages/homePage/HomePage";
import WaterActivitiesPage from "./pages/waterActivitiesPage/WaterActivitiesPage";
import ActivityPage from "./pages/actitvityPage/ActivityPage";
import LandaActivitiesPage from "./pages/landActivitiesPage/LandActivitiesPage";

/*import TransparentKayackPage from "./pages/transparentKayackPage/TransparentKayackPage";*/
import ActivitiesPage from "./pages/activitiesPage/ActivitiesPage";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Front and authentication */}
          <Route path="/" element={<FrontPage />} />
          <Route path="/front" element={<FrontPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/registersecond" element={<RegisterPageSecond />} />
          {/* Home and activity categories */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/waterActivities" element={<WaterActivitiesPage />} />
          <Route path="/landActivities" element={<LandaActivitiesPage />} />
          <Route path="/profile" element={<ProfilePage />} />

          {/*  <Route
            path="/waterActivities/canoeing/transparent-kayak"
            element={<TransparentKayackPage />}
          />*/}
          <Route path="/activities/:type/:sport" element={<ActivitiesPage />} />
          <Route path="/activities/:type/:sport/:activity" element={<ActivityPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
