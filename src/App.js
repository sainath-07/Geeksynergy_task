import { Route, Routes } from 'react-router-dom';
import './App.css';

import MoviesPage from './Components/MoviesPage';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import Navigation from './NavigationScreens/Navigation';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/moviespage" element={<MoviesPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route
          path="/signuppage"
          element={
            <SignupPage

            />
          }
        />
      </Routes>
    </>
  )
}

export default App;
