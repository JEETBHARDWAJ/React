import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';




function App() {
  return (
    <>
      <Navbar title="SIH" />
      <div className="container">
      <TextForm heading = "example"/>
      </div>
    </>


  );
}

export default App;
