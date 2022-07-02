import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    employee: {},
    employees: {}
}

export const site = createSlice({
    name: 'site',
    initialState,
    reducers: {
        setEmployee: (state, action) => {
            state.employee = action.payload
        },
        setEmployees: (state, action) => {
            state.employees = action.payload
        },
        setPuan: (state, action) => {
            state.employees=action.payload
          
        }
    },
})

export const { setEmployee,setEmployees,setPuan } = site.actions
export default site.reducer