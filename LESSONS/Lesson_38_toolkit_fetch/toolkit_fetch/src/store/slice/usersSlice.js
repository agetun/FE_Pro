import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const resp = await fetch('https://dummyjson.com/users');
        const data = await resp.json();
        return data.users
    }
)

export const usersSlice = createSlice ({
    name: 'users',
    initialState,
    reducers: {
        delete_user(state, action){
            state.list = state.list.filter(el => el.id !== action.payload)
        },
        incr_age(state, action){
            state.list.find(el => el.id === action.payload).age++            
        },
        decr_age(state, action){
            const target = state.list.find(el => el.id === action.payload);
            if(target.age === 1){
                state.list = state.list.filter(el => el.id !== action.payload)
            } else {
                target.age--
            }
        }        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading'
            }) 
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'ready'
                state.list = action.payload
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.status = 'error'
            })
    }
})

export const { delete_user, incr_age, decr_age } = usersSlice.actions;
export default usersSlice.reducer;