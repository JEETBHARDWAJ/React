import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/about';




function App() {
  return (
    <>
   
     
      <Navbar title="SIH" />

      <div className="container">
       
        <About/>
       

      </div>
    </>



  );
}

export default App;
