import logo from './logo.svg';
import './App.css';
import React, { useReducer } from 'react';
import Menu from './components/menu';
import Content from './components/content';
const MenuContext = React.createContext();

function menuBtnReducer(state,action) {
  const initial = {
    toggle: false,
    array: false,
    object: false,
    shallow: false,
  }
  switch (action) {
    case "toggle":
      return {
        ...initial,
        toggle: true
      };
    case "array":
      return  {
        ...initial,
        array: true
      };
  
    case "object":
      return  {
        ...initial,
        object: true
      };
  
    case "shallow":
      return  {
        ...initial,
        shallow: true
      };
  
    default:
      return state;
  }
}

function App() {
  const [menuBtn,menuDispatch] = useReducer(menuBtnReducer, {
    toggle: true,
    array: false,
    object: false,
    shallow: false,
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MenuContext.Provider value={{menuBtn,menuDispatch}}>
        <Menu MenuContext={MenuContext} />
        <Content MenuContext={MenuContext} />
      </MenuContext.Provider>
    </div>
  );
}

export default App;

/* 
shallow and deep merge 
setState
spread syntax
*/


/* 
the last things to be done 
api
loading..
*/