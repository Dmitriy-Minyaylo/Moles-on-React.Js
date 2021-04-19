import { ACTION_SET_COUNT_WIN, ACTION_SET_COUNT_FAIL, ACTION_SET_LVL, ACTION_SET_TIMER, ACTION_SET_ACTIVE_GRID } from './constAction'


//стартовое состояние 
const initialState = {
   countWin: 0,
   countFail: 0,
   lvl: 1,
   timer: 4000,
   activeGrid: null
}

export const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case ACTION_SET_COUNT_WIN:
         console.log("countWin in reducer", action.payload);

         return {
            ...state,
            countWin: action.payload
         };
      case ACTION_SET_COUNT_FAIL:
         console.log("countFail in reducer", action.payload);
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
      case ACTION_SET_ACTIVE_GRID:

         return {
            ...state,
            activeGrid: Math.floor(Math.random() * 6)
         };
   }
   return state
}
