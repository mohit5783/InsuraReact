import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="79892182367-fq4noubm8266id8oo8im13bduj8hc76d.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
