import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Destinations from "./components/Destinations";
import DestinationInfo from "./components/DestinationInfo";
import DayInYourCity from "./components/DayInYourCity";
import DayInYourCityInfo from "./components/DayInYourCityInfo";
import PlanYourTrip from "./components/PlanYourTrip";
import TravelTips from "./components/TravelTips";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Admin from "./components/Admin";
import ResetPass from "./components/ResetPass";
import CompleteResetPassword from "./components/CompleteResetPassword";
import UserInfo from "./components/UserInfo";
import MyFav from "./components/MyFav";
import MyOrders from "./components/MyOrders";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/destinations" element={<Destinations />} />
        <Route exact path="/UserInfo" element={<UserInfo />} />
        <Route exact path="/MyFav" element={<MyFav />} />
        <Route exact path="/MyOrders" element={<MyOrders />} />
        <Route
          exact
          path="/destinations/:city/:id"
          element={<DestinationInfo />}
        />
        <Route exact path="/dayInYourCity" element={<DayInYourCity />} />
        <Route
          exact
          path="/dayInYourCity/:id"
          element={<DayInYourCityInfo />}
        />
        <Route exact path="/PlanYourTrip" element={<PlanYourTrip />} />
        <Route exact path="/travelTips" element={<TravelTips />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/resetPass" element={<ResetPass />} />
        <Route
          exact
          path="users/completeResetPassword/:id"
          element={<CompleteResetPassword />}
        />

        <Route path="*" element={<h1> 404 </h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
