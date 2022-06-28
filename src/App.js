import { Routes, Route, Link } from "react-router-dom"
import Header from "./components/Header";
import Employeetbl from "./pages/Employeetbl"
import EmployeePage from "./pages/EmployeePage"
function App() {



  return (
    <div className="App">
      
      <Header />
      <Routes>
      <Route path="/" element={<Employeetbl />} />
        <Route path="Employeepage/:url" element={<EmployeePage />} />
      </Routes>
      
      


    </div>
  );
}

export default App;
