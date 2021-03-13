import React, { useState } from 'react';
import StartScreen from '../Start'
import MainScreen from '../Game-field';

const App = () => {


   const [flag, setFlag] = useState(false)

   const handleClick = () => {
      setFlag(true)
   }

   return (
      <div className="App">
         <header className="App-header">
            {flag ?
               <MainScreen /> :
               <StartScreen onClickProp={handleClick} />
            }
         </header>
      </div >
   );
}

export default App;