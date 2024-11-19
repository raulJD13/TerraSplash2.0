import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FrontPage from "./pages/frontPage/FrontPage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import RegisterPageSecond from "./pages/registerPageSecond/RegisterPageSecond";
import HomePage from "./pages/homePage/HomePage";
import WaterActivitiesPage from "./pages/waterActivitiesPage/WaterActivitiesPage";
import LandaActivitiesPage from "./pages/landActivitiesPage/LandActivitiesPage";
import CanoeingPage from "./pages/canoeingPage/CanoeingPage";
import TransparentKayackPage from "./pages/transparentKayackPage/TransparentKayackPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import FishingPage from "./pages/fishingPage/FishingPage";
import DivingPage from "./pages/divingPage/DivingPage";
import WindsurfingPage from "./pages/windsurfingPage/WindsurfingPage"; 
import ParasailingPage from "./pages/parasailingPage/ParasailingPage"; 
import JetSkiingPage from "./pages/jetSkiingPage/JetSkiingPage"; 
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/front" element={<FrontPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/registersecond" element={<RegisterPageSecond />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/waterActivities" element={<WaterActivitiesPage />} />
          <Route path="/landActivities" element={<LandaActivitiesPage />} />
          <Route path="/waterActivities/canoeing" element={<CanoeingPage />} />
          <Route path="/waterActivities/fishing" element={<FishingPage />} />
          <Route path="/waterActivities/diving" element={<DivingPage />} />
          <Route path="/waterActivities/windsurfing" element={<WindsurfingPage />} /> {/* Nueva ruta */}
          <Route path="/waterActivities/parasailing" element={<ParasailingPage />} /> {/* Nueva ruta */}
          <Route path="/waterActivities/jet-skiing" element={<JetSkiingPage />} /> {/* Nueva ruta */}
          <Route path="/waterActivities/canoeing/transparent-kayak" element={<TransparentKayackPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
