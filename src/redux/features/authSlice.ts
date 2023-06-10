import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
  username: string;
  userId: string;
  isAdmin: boolean;
};

const initialState: InitialState = {
  value: {
    isAuth: false,
    username: '',
    userId: '',
    isAdmin: false,
  },
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    login: (_, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          isAdmin: false,
          userId: 'something123',
          username: action.payload,
        },
      };
    },
    toggle: (state: InitialState) => {
      state.value.isAdmin = !state.value.isAdmin;
    },
  },
});

export const { login, logout, toggle } = auth.actions;
export default auth.reducer;
