import CustomerRegistration from "./Components/Customer/CustomerRegistration";
import CustomerLogin from "./Components/Customer/CustomerLogin";
import Profile from "./Components/Customer/CustomerProfile/Profile";
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <div>
        {/* <CustomerLogin></CustomerLogin> 
      <CustomerRegistration></CustomerRegistration> */}
      <BrowserRouter>
      <Route path="/">
        <Profile></Profile> 
      </Route>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
