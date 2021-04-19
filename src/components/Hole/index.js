import React, { Fragment, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCountWin, setCountFail, setLvl, setTimer, setActiveGrid } from '../../store/action';
// import { ACTION_SET_COUNT_WIN, ACTION_SET_COUNT_FAIL, ACTION_SET_LVL, ACTION_SET_TIMER, ACTION_SET_ACTIVE_GRID } from './../../store/constAction'

import './hole.css';

const Hole = () => {
   // метод для передачи новых данных в state
   const dispatch = useDispatch();
   // обращаемся через useSelector к state для получения значения без использования props
   const countWin = useSelector(state => state.countWin);
   const countFail = useSelector(state => state.countFail);
   const lvl = useSelector(state => state.lvl);
   const timer = useSelector(state => state.timer);
   const activeGrid = useSelector(state => state.activeGrid);

   // используем useRef для остановки теймеров через constName.current
   const generateMole = useRef(null);
   const dissappMole = useRef(null);
   const successClick = useRef(null);
   const errorClick = useRef(null);

   // генерация крота каждые 20мс
   useEffect(() => {
      generateMole.current = setTimeout(() => {
         dispatch(setActiveGrid())
      }, 20)
   }, [])

   // исчезновение по окончанию
   useEffect(() => {
      dissappMole.current = setTimeout(() => {
         console.log('Это провал по времени', timer);
         dispatch(setCountFail(countFail + 1))
         dispatch(setActiveGrid())
      }, timer)
   }, [countFail])

   // уменьшение времени с увеличением уровня
   useEffect(() => {
      if (lvl > 1) {
         dispatch(setTimer(timer - 350))
      }
   }, [lvl])

   const moleClick = (e) => {
      // при правильном клике по кроту
      if (e.target.className === "game-grid present") {
         dispatch(setCountWin(countWin + 1))
         successClick.current = setTimeout(() => {
            e.target.classList.toggle("success")
            dispatch(setActiveGrid())
            clearTimeout(dissappMole.current)
         }, 40)

         if (countWin % 10 === 0 && 10 <= countWin) {
            dispatch(setLvl(lvl + 1))
         }
      } else {
         // клик мимо добавляет поражение
         errorClick.current = setTimeout(() => {
            dispatch(setCountFail(countFail + 1))
            e.target.classList.toggle("fail")
            dispatch(setActiveGrid())
            clearTimeout(dissappMole.current)

         }, 40)
      }
   }

   // const createMole = () => {

   //    console.log('fail в createMole', countFail);

   //    delayMole.current = setTimeout(() => {
   //       const divsArr = Array.from(elements)

   //       initialFields(
   //          divsArr[random].classList.toggle("present")
   //       )

   //       console.log('timer current countFail', countFail);

   //       dissappMole.current = setTimeout(() => {
   //          const divsArr = Array.from(elements)

   //          // setCountFail(prevState => prevState + 1);
   //          setCountFail(countFail + 1);
   //          setActiveGrid()

   //          console.log('timer resetMole countFail', countFail);

   //          initialFields(
   //             divsArr.map((div) => {
   //                div.classList.remove("present")
   //             })
   //          )

   //          if (countFail < 2) {
   //             createMole(countFail)
   //          }
   //       }, timer)
   //    }, 20)
   // }

   // const moleClick = (e) => {
   //    // setRandom()
   //    if (e.target.className === "game-grid present") {
   //       addCountWin()
   //       // setCountWin(countWin + 1)
   //       if (countWin % 10 === 0 && 10 <= countWin) {
   //          setLvl(lvl + 1)
   //       }

   //       e.target.classList.toggle("success")
   //       const divsArr = Array.from(elements)

   //       setTimeout(() => {
   //          const newFields = divsArr.map((div) => {
   //             return (
   //                div.classList.remove("success", "present")
   //             )
   //          })
   //          initialFields(newFields)
   //          clearTimeout(resetMole.current)
   //          clearTimeout(stopMole.current)
   //          if (countFail <= 2 && countWin < 99) {
   //             createMole()
   //          }
   //       }, 40)

   //    } else {
   //       setCountFail(countFail + 1)

   //       e.target.classList.toggle("fail")

   //       const divsArr = Array.from(elements)

   //       setTimeout(() => {
   //          const newFields = divsArr.map((div) => {
   //             return (
   //                div.classList.remove("fail", "present")
   //             )
   //          })
   //          initialFields(newFields)
   //          clearTimeout(resetMole.current)
   //          clearTimeout(stopMole.current)

   //          if (countFail < 2 && countWin < 99) {
   //             createMole()
   //          }
   //       }, 40)
   //    }
   // }
   const initialFields = (fields) => {
      if (fields) {
         return fields
      }
   }

   return (
      <Fragment>
         {
            Array.from({ length: 6 }, (v, index) => {
               const selected = index == activeGrid
               return (
                  <div
                     className={selected ? "game-grid present" : "game-grid"}
                     id={index + 1}
                     key={index + 1}
                     onClick={moleClick}
                  >
                  </div>
               )
            })
         }
      </Fragment>
   )
}

export default Hole
