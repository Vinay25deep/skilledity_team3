import { createSlice } from '@reduxjs/toolkit';

// Initial state for authentication
const initialState = {
  school_name: 'scl name',
  school_id: 'id',
  std_class:'class',
  section:'sec',
  student_school_fk:'N',
  students: [],
  authorisation:false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSchoolData: (state, action) => {
      state.school_name = action.payload.school_name;
      state.school_id = action.payload.school_id;
    },
    clearSchoolData: (state) => {
      state.school_name = '';
      state.school_id = '';
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
    },
    setAuth : (state,action) => {
      state.authorisation = action.payload.authorisation;
    }
  },
});

export const { setSchoolData, clearSchoolData ,setClassData ,addStudent,setForiegnKey,setAuth} = authSlice.actions;
export default authSlice.reducer;
