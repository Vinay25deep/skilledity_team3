import { createSlice } from '@reduxjs/toolkit';

// Initial state for authentication
const initialState = {
  schoolName: '',
  schoolId: '',
  std_class:'',
  section:''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSchoolData: (state, action) => {
      state.schoolName = action.payload.schoolName;
      state.schoolId = action.payload.schoolId;
    },
    clearSchoolData: (state) => {
      state.schoolName = '';
      state.schoolId = '';
    },
    setClassData:(state, action) => {
      state.std_class = action.payload.std_class;
      state.section = action.payload.section;
    }
  },
});

export const { setSchoolData, clearSchoolData ,setClassData } = authSlice.actions;
export default authSlice.reducer;
