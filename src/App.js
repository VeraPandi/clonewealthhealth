import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/header/Sidebar";
import "./styles/main.scss";

function App() {
   return (
      <Router>
         <div className="page">
            <Sidebar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/employees" element={<Employees />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
