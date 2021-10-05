import CustomerRegistration from "./Components/Customer/CustomerRegistration";
import CustomerLogin from "./Components/Customer/CustomerLogin";
import Profile from "./Components/Customer/CustomerProfile/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/CrmLanding/Navbar";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        





        <Route path="/">
          <Profile></Profile>
        </Route> 
      </Router>
    </div>
  );
}

export default App;
