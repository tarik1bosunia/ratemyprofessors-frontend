import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalsState {
  models: {
    [key: string]: boolean;
  }
  email: string | null;
}

const initialState: ModalsState = {
  models: {},
  email: null
};

const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.models[action.payload] = true;
    },
    closeModal: (state, action: PayloadAction<string>) => {
      state.models[action.payload] = false;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    }
  },
});

export const { openModal, closeModal, setEmail } = modalSlice.actions;
export default modalSlice.reducer;
