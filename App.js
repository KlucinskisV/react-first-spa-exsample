import './style/main.css'

import Navbar from './componets/navbar/Navibar';
import Home from './pages/Home';
import Footer from './componets/footer/Footer';
import Gallery from './pages/Gallery';
import Contacts from './pages/Contact';



function App() {
  return (
    <div className="App">

      <Navbar/>
      <Home/> 
      <Gallery />
      <Contacts />   
      <Footer/>
     


    </div>
  );
}

export default App;
