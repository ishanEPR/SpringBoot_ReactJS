import FooterComponents from "./components/FooterComponents";
import HeaderComponents from "./components/HeaderComponents";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import './App.css';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponents from "./components/UpdateEmployeeComponents";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";
function App() {
  return (
    <div>
    <BrowserRouter>
        <HeaderComponents/>
        <div className="container">
            <Switch>
                <Route exact path="/" component={ListEmployeeComponent}/>
                <Route path="/add-employee/:id" component={CreateEmployeeComponent}/>
                <Route path="/view-employee/:id" component={ViewEmployeeComponent}/>
                
                {/* <Route path="/update-employee/:id" component={UpdateEmployeeComponents}/> */}

            </Switch>
         
        
        </div>
        <FooterComponents/>
    </BrowserRouter>  
    </div>
  );
}

export default App;
