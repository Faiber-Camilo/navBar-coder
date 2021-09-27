
import './App.css';
import './components/NavBar.css';
import NavBar from './components/NavBar.js';
import React ,{Component} from "react";


class App extends Component {
  render(){
    return (
    <div className='navBar'>
      <NavBar />
    </div>
      
  );
  }
  
}

export default App;
