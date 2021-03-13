import React from 'react';
import './GameOverScreen.css';
import images from './images.jpg';
import Restart from '../common/restart/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCountWin, setCountFail, setLvl, setTimer } from '../../store/action'


const GameOverScreen = ({
   countWin,
   countFail,
   lvl,
   timer,
}) => {
   return (
      <div className='game-over'>
         <div className='game-over-text'>
            <h1>Тебе нас не победить!!!</h1>
            <img src={images} alt='Победа' />
         </div>
         <div className='score'>
            <h3>Game difficulty: {lvl}</h3>
            <h3>Score: {countWin}/100 point(s)</h3>
            <h3>You failed: {countFail} time(s)</h3>
            <h3>Speed: {timer} ms</h3>
         </div>
         <Restart />
      </div >
   )
}

const pushStateToProps = (state) => {
   return {
      countWin: state.countWin,
      countFail: state.countFail,
      lvl: state.lvl,
      timer: state.timer
   }
}

const pushActionsToProps = (dispatch) => {
   return {
      setCountWin: bindActionCreators(setCountWin, dispatch),
      setCountFail: bindActionCreators(setCountFail, dispatch),
      setLvl: bindActionCreators(setLvl, dispatch),
      setTimer: bindActionCreators(setTimer, dispatch),
   }
}

export default connect(pushStateToProps, pushActionsToProps)(GameOverScreen)


