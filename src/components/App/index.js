import React, { useState } from 'react';
import StartScreen from '../Start'
import GameField from '../GameField';

const App = () => {

   const [flag, setFlag] = useState(false)

   const handleClick = () => {
      setFlag(true)
   }

   return (
      <div className="App">
         <header className="App-header">
            {flag ?
               <GameField /> :
               <StartScreen onClickProp={handleClick} />
            }
         </header>
      </div >
   );
}

export default App;