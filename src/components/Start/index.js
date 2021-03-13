import React from 'react';
import './startScreen.css';

const StartScreen = ({ onClickProp }) => {
   return (
      <div className="startScreen">
         <button className="startButton" onClick={onClickProp}>
            <h2>Start</h2>
         </button>
      </div >
   )
}

export default StartScreen


