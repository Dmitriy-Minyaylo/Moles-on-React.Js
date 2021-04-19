import { ACTION_SET_COUNT_WIN, ACTION_SET_COUNT_FAIL, ACTION_SET_LVL, ACTION_SET_TIMER, ACTION_SET_ACTIVE_GRID } from './constAction';

export const setCountWin = (countWin) => {
   return {
      type: ACTION_SET_COUNT_WIN,
      payload: countWin
   }
}

export const setCountFail = (newData) => {
   return {
      type: ACTION_SET_COUNT_FAIL,
      payload: newData
   }
}

export const setLvl = (newData) => {
   return {
      type: ACTION_SET_LVL,
      payload: newData
   }
}

export const setTimer = (newData) => {
   return {
      type: ACTION_SET_TIMER,
      payload: newData
   }
}
export const setActiveGrid = () => {
   return {
      type: ACTION_SET_ACTIVE_GRID
   }
}

