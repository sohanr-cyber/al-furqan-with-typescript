import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Cookies from "js-cookie";
import { Ichapater, Isurah } from '../type';

export interface IState {

  history: Ichapater[]
}


export const historySlice = createSlice({
  name: "history",
  initialState: <any>{
    history: Cookies.get("history") ? Cookies.get("history") : [],
  }
  ,

  reducers: {
    addtoHistory: (state, action: PayloadAction<Ichapater>) => {
      let withNewOne: any = [action.payload, ...state.history];
      Cookies.set("history", withNewOne);
      state.history = withNewOne;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtoHistory } = historySlice.actions;

export default historySlice.reducer;
