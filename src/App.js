import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';

function App() {
  const [mode , setMode] = useState('light')

  const toggleMode = ()=>{
    if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = 'grey'
    }
    else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    }
  }
  return (

    <><Navbar title="Aayush" mode={mode} toggleMode={toggleMode} />
    <Router>
            <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <div className="container my-5" >
            <Textform heading="Please write text"></Textform>
          </div>
          </Route>
        </Switch>
        </Router>
    </>
  );
}

export default App;

