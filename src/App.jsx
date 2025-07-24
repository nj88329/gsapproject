import Hero from './Hero';
import Navbar from './Navbar';
import Footer from './Footer';
import   Carousel  from "./Carousel";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
    

  return (
    <>
     <Router > 
        <div className = 'bg-black scrollbar-hide'>
        <Routes> 
           <Route path ="/"
               element = {
                 HomeElement
              }
            ></Route>    
            <Route path ="/home"
               element = {
                 HomeElement
              }
            ></Route>        
             <Route path = "/dashboard" element={<Dashboard/>}/>
          </Routes>
         </div>
      </Router>
      <Footer/>
    </>
  )
}

export default App

const HomeElement = (
  <>
    <Navbar />
    <Hero />
    <Carousel />
  </>
);
