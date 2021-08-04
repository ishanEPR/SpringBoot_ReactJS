import FooterComponents from "./components/FooterComponents";
import HeaderComponents from "./components/HeaderComponents";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import './App.css'
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
function App() {
  return (
    <div>
      <HeaderComponents/>
      <div className="container">
        <ListEmployeeComponent/>
        <CreateEmployeeComponent/>
      
      </div>
      <FooterComponents/>
    </div>
  );
}

export default App;
