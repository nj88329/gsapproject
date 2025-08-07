import Hero from './Hero';
import Navbar from './Navbar';
import Footer from './Footer';
import   Carousel  from "./Carousel";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CompanionPage from './components/CompanionPage';
import Interview from './components/Interview';
import Items from './components/Items'

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
             <Route path = "/dashboard" element={DashboardPage}/>
             <Route path = '/dashboard/learningcompanion' element = {<CompanionPage/>}> </Route>
             <Route path ='/dashboard/interviewPage' element={<Interview/>}></Route>
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


const DashboardPage = (
<>
  <Dashboard/>  
   <Items/>
</>
)