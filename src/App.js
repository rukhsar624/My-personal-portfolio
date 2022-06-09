import React, { useState, useContext, Component } from 'react'
import Myportfolio from './component/portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import context from './component/context';
const App = () => {
const userData = useContext(context)
const [CurrentMode, setCurrentMode] = useState("#FFF");
const [FontColor,setFontColor] = useState ("#000");
const userInfo = { CurrentMode, setCurrentMode,FontColor,setFontColor }
return (
    <>
      <context.Provider value={userInfo}>
        <Myportfolio />
      </context.Provider>
    </>
  );
};
export default App


