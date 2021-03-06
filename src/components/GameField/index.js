import React from 'react';
import Hole from '../Hole';
import Score from '../ScoreInfo';
import GameOver from '../GameOver';
import WinGame from '../WinGame';
import { connect } from 'react-redux';
import './game-field.css';

const GameField = ({
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
                  : "КОНЕЦ"
         }
      </div>
   )
}


const pushStateToProps = (state) => {
   // console.log("state", state);

   return {
      countWin: state.countWin,
      countFail: state.countFail,
   }
}

export default connect(pushStateToProps)(GameField)

