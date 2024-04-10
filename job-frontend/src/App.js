import { Routes, Route ,Link} from "react-router-dom";

import Register from "./login/Components/RegisterYup";
import ForgotPassword from "./login/Components/ForgotPassword";
import Mdashboard from "./login/Components/Mdashboard";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./login/Components/Home";



function App() {
  return (
    <div>
    <Routes>
      <Route path="/*" element={<Mdashboard />} />

      <Route path="/Login" element={<Mdashboard />} />
       {/* <Route path="/" element={<Home />} />  */}
      <Route path="/Reset" element={<ForgotPassword />} />

      <Route path="/Register" element={<Register />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
     

      {/* <Route path="*" element={<Navigate to="/Login" />} /> */}
    </Routes>
    < footer class="footer relative-top">
    <div className="footer">
      <h1 className="text-center">All Right Reserved &copy; patel</h1>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>
      
      </p>
    </div>
    
    </footer>
    </div>
  );
}
export default App;
