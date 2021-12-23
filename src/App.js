import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Destinations from "./components/Destinations";
import DayInYourCity from "./components/DayInYourCity";
import UserDestinations from "./components/UserDestinations";
import TravelTips from "./components/TravelTips";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/destinations" element={<Destinations />} />
        <Route exact path="/dayInYourCity" element={<DayInYourCity />} />
        <Route exact path="/userDestinations" element={<UserDestinations />} />
        <Route exact path="/travelTips" element={<TravelTips />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="*" element={<h1> 404 </h1>} />
      </Routes>
    </>
  );
}

export default App;
