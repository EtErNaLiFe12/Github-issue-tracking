import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserInfo {
  name: string,
  balance: string
}
interface initialState {
  value: number,
  userInfo: UserInfo[],
}

const initialState: initialState = {
  value: 0,
  userInfo: []
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setCounter(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
    setUserInfo(state, action: PayloadAction<UserInfo[]>) {
      state.userInfo = action.payload;
    },

  }
});

export const { setCounter, setUserInfo } = mainSlice.actions;

export default mainSlice.reducer;