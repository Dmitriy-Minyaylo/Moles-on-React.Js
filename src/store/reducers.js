import { ACTION_SET_COUNT_WIN, ACTION_SET_COUNT_FAIL, ACTION_SET_LVL, ACTION_SET_TIMER } from '../index'

//стартовое состояние 
const initialState = {
   countWin: 0,
   countFail: 0,
   lvl: 1,
   timer: 4000
}

export const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case ACTION_SET_COUNT_WIN:
         return {
            ...state,
            countWin: action.payload
         };
      case ACTION_SET_COUNT_FAIL:
         return {
            ...state,
            countFail: action.payload
         };
      case ACTION_SET_LVL:
         return {
            ...state,
            lvl: action.payload
         };
      case ACTION_SET_TIMER:
         return {
            ...state,
            timer: action.payload
         };
   }
   return state
}
