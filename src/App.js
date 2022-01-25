// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import react, {useState} from 'react';
function App() {
  return (
    // <Navbar/>
    <>
    <Navbar title="TextUtils" aboutText = "About"    />    
    <div className="container">
    <TextForm heading = "Enter the text to analyze below"  />
    </div>
    
    </>
  );
}

export default App;
