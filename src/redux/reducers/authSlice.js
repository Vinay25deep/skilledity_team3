import { createSlice } from '@reduxjs/toolkit';

// Initial state for authentication
const initialState = {
  schoolName: '',
  schoolId: '',
  std_class:'',
  section:'',
  student_school_fk:'',
  students: []
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
    },
    addStudent: (state, action) => {
      // Add the new student to the list
      state.students.push(action.payload);
    },
    setForiegnKey: (state, action) => {
      state.student_school_fk = action.payload.student_school_fk;
    }
  },
});

export const { setSchoolData, clearSchoolData ,setClassData ,addStudent,setForiegnKey} = authSlice.actions;
export default authSlice.reducer;
