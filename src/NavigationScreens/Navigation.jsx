import { useState } from "react";
import LoginPage from "../Components/LoginPage";
import SignupPage from "../Components/SignupPage";
import MoviesPage from "../Components/MoviesPage";
import TopBar from "../Components/TopBar";

const Navigation = () => {
  const [moviespage, setMoviesPage] = useState(false);
  const [loginpage, setLoginPage] = useState(false);
  const [signuppage, setSignupPage] = useState(true);

  return (
    <div>
      <TopBar
      moviespage={moviespage}
      setMoviesPage={setMoviesPage}
      setLoginPage={setLoginPage}
      setSignupPage={setSignupPage}
      />
      {signuppage && (
        <SignupPage
          setloginpage={setLoginPage}
          setsignpupage={setSignupPage}
          setmoviespage={setMoviesPage}
        />
      )}
      {loginpage && (
        <LoginPage
        moviespage={moviespage}
          setloginpage={setLoginPage}
          setsignpupage={setSignupPage}
          setmoviespage={setMoviesPage}
        />
      )}
      {moviespage && <MoviesPage />}
    </div>
  );
};


export default Navigation