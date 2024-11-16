import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './pages/frontPage/FrontPage';
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import RegisterPageSecond from './pages/registerPageSecond/RegisterPageSecond';
import HomePage from './pages/homePage/HomePage';
import '@fortawesome/fontawesome-free/css/all.css';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<FrontPage/>}/>
        <Route path='/front' element={<FrontPage/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/registersecond" element={<RegisterPageSecond />} />
        <Route path="/home" element={<HomePage />} />

      </Routes>
    </Router>
      
    </>
  );
}

export default App;
