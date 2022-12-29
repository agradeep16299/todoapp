import React from 'react'
import Todo from './components/Todo'
import { useContext } from "react";
import { themeContext } from "./Context";
import Navbar from './components/Navbar';
const App = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   
    <div
    className='App'
    style={{
      background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
    }}>
      <Navbar />
      <Todo />
    </div>
  )
}

export default App