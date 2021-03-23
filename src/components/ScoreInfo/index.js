import React, { Fragment } from 'react'
import './score-info.css';
import { connect } from 'react-redux';


const Score = ({
   countWin,
   countFail,
   lvl,
   timer
}) => {

   return (
      <Fragment>
         <div className='status-bar'>
            <h2 >STATUS BAR</h2>
         </div>

         <div className='info'>
            <h3>Game difficulty: {lvl}</h3>
            <h3>Score: {countWin}/100 point(s)</h3>
            <h3>You failed: {countFail} time(s)</h3>
            <h3>TimeSpeed: {timer} ms</h3>
         </div>
      </Fragment>
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

export default connect(pushStateToProps)(Score)
