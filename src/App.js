import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/header/Sidebar";
import "./styles/main.scss";

function App() {
   return (
      <Router basename={process.env.PUBLIC_URL}>
         <div className="page">
            <Sidebar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/employees" element={<Employees />} />
               <Route path="/404" element={<NotFound />} />
               <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
