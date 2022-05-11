import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [bool,setBool] = useState(false)
  const toggle = ()=>{
    setBool(!bool)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>{String(bool)}</div>
      <button className='toggle' onClick={toggle}>toggle</button>
      {bool && <div className={`container ${bool && 'visible'}`}></div>}
    </div>
  );
}

export default App;