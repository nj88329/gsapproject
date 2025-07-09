import Hero from './Hero';
import Navbar from './Navbar';
import Footer from './Footer';
import   Carousel  from "./Carousel";

function App() {


  return (
    <>
     <main className = 'bg-black'>
         <Navbar/>
         <Hero/>
          <Carousel/>
          <Footer/>
      </main>
    </>
  )
}

export default App
