import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home  from "./component/Home";
import About from "./component/About";
import Footer from "./component/Footer";
import Services from "./component/Services";
import Testimonials from "./component/Testimonials";
import ContactUs from "./component/ContactUs";

// Ensure Navbar and Home are correctly imported
const App = () => {
  return (
   <>
  <Router>
      <Navbar/>
      <Routes>
        <Route path="/" index element={<Home/>} />
        <Route path="services" element={<Services/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/testimonial" element={<Testimonials/>} /> 
          <Route path="/contact" element={<ContactUs/>} />
      
      </Routes>
      <Footer/>
    </Router>
   
   </>
  )
}

export default App
