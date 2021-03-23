import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCountWin, setCountFail, setLvl, setTimer } from '../../store/action'


const Restart = ({
   setCountWin,
   setCountFail,
   setLvl,
   setTimer
}) => {
   const restartClick = () => {
      setCountFail(0)
      setCountWin(0)
      setLvl(1)
      setTimer(4000)
   }

   return (
      <button className='again' onClick={restartClick}>
         Давай еще?
      </button>
   )
}

const pushActionsToProps = (dispatch) => {
   return {
      setCountWin: bindActionCreators(setCountWin, dispatch),
      setCountFail: bindActionCreators(setCountFail, dispatch),
      setLvl: bindActionCreators(setLvl, dispatch),
      setTimer: bindActionCreators(setTimer, dispatch),
   }
}

export default connect(null, pushActionsToProps)(Restart)


