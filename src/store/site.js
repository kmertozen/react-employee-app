import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    employees: { calisan: [] },
    language: 'tr'
}

export const site = createSlice({
    name: 'site',
    initialState,
    reducers: {
        setEmployees: (state, action) => {
            state.employees = action.payload
        }
    },
})

export const { setEmployees } = site.actions
export default site.reducer