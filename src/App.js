import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Employees from "./pages/Employees.jsx";
import "./styles/main.scss";

function App() {
   return (
      <Router basename={process.env.PUBLIC_URL}>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<Employees />} />
         </Routes>
      </Router>
   );
}

export default App;
