// import logo from './logo.svg';
import './App.css';
import './Footer.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';
import react, {useState} from 'react';
function App() {
  return (
    // <Navbar/>
    <>
    <Navbar title="Textutils" aboutText = "About"    />    
    <div className="container">
    <TextForm heading = "Enter the text to analyze below"  />
    </div>
    <Footer/>
    </>
  );
}

export default App;
