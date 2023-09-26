import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';

const [text  , utility ] =  useState("New key")


function App() {
  return (
    <Navbar title = "text"/>

  );
}

export default App;
