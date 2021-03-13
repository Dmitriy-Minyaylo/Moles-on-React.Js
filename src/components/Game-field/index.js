import React from 'react';
import Hole from '../Hole';
import Score from '../Score-info';
import GameOver from '../GameOver';
import WinGame from '../WinGame';
import { connect } from 'react-redux';
import './game-field.css';

const MainScreen = ({
   countFail,
   countWin,
}) => {

   return (
      <div className='main-board'>
         {countFail <= 2 && countWin < 99 ?
            <>
               <div className='game-field'>
                  <Hole />
               </div>
               <div className='score-info'>
                  <Score />
               </div>
            </>
            : countWin === 100 ?
               <WinGame />
               : countFail === 3 ?
                  <GameOver />
                  : "падает по истичению времени"
         }
      </div>
   )
}


const pushStateToProps = (state) => {
   console.log("state", state);

   return {
      countWin: state.countWin,
      countFail: state.countFail,
   }
}

export default connect(pushStateToProps)(MainScreen)

