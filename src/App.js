import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PersonalInfo from './screens/PersonalInfo/PersonalInfo';
import BillingInfo from './screens/BillingInfo/BillingInfo';
import BillingDetails from './screens/BillingDetails/BillingDetails';
import PaymentSuccessful from './screens/PaymentSuccessful/PaymentSuccessful';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" exact element={ <PersonalInfo /> }/>
            <Route path="/billinginfo" exact element={ <BillingInfo /> }/>
            <Route path="/billingdetails" exact element={ <BillingDetails /> }/> 
            <Route path="/payment/successful" exact element={ <PaymentSuccessful /> }/> 
          </Routes>
      </Router>  
    </div>
  );
}

export default App;
