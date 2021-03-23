import { ACTION_SET_COUNT_WIN, ACTION_SET_COUNT_FAIL, ACTION_SET_LVL, ACTION_SET_TIMER, ACTION_SET_RANDOM } from './constAction';

export const setCountWin = (newData) => {
   return {
      type: ACTION_SET_COUNT_WIN,
      payload: newData
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
export const setRandom = () => {
   return {
      type: ACTION_SET_RANDOM
   }
}

