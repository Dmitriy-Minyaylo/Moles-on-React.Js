import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCountWin, setCountFail, setLvl, setTimer, setRandom } from '../../store/action';
import './hole.css';

const Hole = ({
   countWin,
   countFail,
   lvl,
   timer,
   random,
   setCountWin,
   setCountFail,
   setLvl,
   setTimer,
   setRandom
}) => {

   useEffect(() => {
      createMole()
      return () => clearTimeout(stopMole.current)
   }, [])

   useEffect(() => {
      if (lvl > 1) {
         setTimer(timer - 350)
      }
   }, [lvl])
   console.log('random', random);

   const resetMole = useRef(null)
   const stopMole = useRef(null)

   const elements = document.getElementsByClassName('game-grid')

   const createMole = () => {

      console.log('createMole', countFail);

      stopMole.current = setTimeout(() => {
         const divsArr = Array.from(elements)

         initialFields(
            divsArr[random].classList.toggle("present")
         )

         console.log('timer current countFail', countFail);

         resetMole.current = setTimeout(() => {
            const divsArr = Array.from(elements)

            // setCountFail(prevState => prevState + 1);
            setCountFail(countFail + 1);

            console.log('timer resetMole countFail', countFail);

            initialFields(
               divsArr.map((div) => {
                  div.classList.remove("present")
               })
            )
            setRandom()

            if (countFail < 2) {
               createMole(countFail)
            }
         }, timer)
      }, 20)
   }

   const moleClick = (e) => {
      setRandom()
      if (e.target.className === "game-grid present") {

         setCountWin(countWin + 1)
         if (countWin % 10 === 0 && 10 <= countWin) {
            setLvl(lvl + 1)
         }

         e.target.classList.toggle("success")
         const divsArr = Array.from(elements)

         setTimeout(() => {
            const newFields = divsArr.map((div) => {
               return (
                  div.classList.remove("success", "present")
               )
            })
            initialFields(newFields)
            clearTimeout(resetMole.current)
            clearTimeout(stopMole.current)
            if (countFail <= 2 && countWin < 99) {
               createMole()
            }
         }, 40)

      } else {
         setCountFail(countFail + 1)

         e.target.classList.toggle("fail")

         const divsArr = Array.from(elements)

         setTimeout(() => {
            const newFields = divsArr.map((div) => {
               return (
                  div.classList.remove("fail", "present")
               )
            })
            initialFields(newFields)
            clearTimeout(resetMole.current)
            clearTimeout(stopMole.current)

            if (countFail < 2 && countWin < 99) {
               createMole()
            }
         }, 40)
      }
   }
   const initialFields = (fields) => {
      if (fields) {
         return fields
      }

      return (
         Array.from({ length: 6 }, (v, index) => {
            return (
               <div
                  className="game-grid"
                  id={index + 1}
                  key={index + 1}
                  onClick={moleClick}
               >
               </div>
            )
         })
      )
   }

   return (
      <>
         {initialFields()}
      </>
   )
}

const pushStateToProps = (state) => {
   return {
      countWin: state.countWin,
      countFail: state.countFail,
      lvl: state.lvl,
      timer: state.timer,
      random: state.random
   }
}

const pushActionsToProps = (dispatch) => {
   return {
      setCountWin: bindActionCreators(setCountWin, dispatch),
      setCountFail: bindActionCreators(setCountFail, dispatch),
      setLvl: bindActionCreators(setLvl, dispatch),
      setTimer: bindActionCreators(setTimer, dispatch),
      setRandom: bindActionCreators(setRandom, dispatch),
   }
}

export default connect(pushStateToProps, pushActionsToProps)(Hole)
