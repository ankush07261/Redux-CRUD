import { createSlice } from "@reduxjs/toolkit";

const users = [
    {
        id: 1,
        name: "john",
        email: "john@example.com"
    },
    {
        id: 2,
        name: "amith",
        email: "amith@example.com"
    }
]
const initialState = users;


const reducer = createSlice({
    name: 'users',
    initialState,
    reducers: {
        create(state, action) {
            console.log(action);
            state.push(action.payload);
        },
        deleteUser(state, action) {
            return state.filter((user)=> user.id !== action.payload)
        },
        updateUser(state, action) {
            // return state.filter((user)=> user.id === action.payload)
            const { id, name, email } = action.payload
            const findUser = state.find((user) => user.id === parseInt(id))
            
            if (findUser) {
                findUser.name = name;
                findUser.email = email;
            }
        }
    }
})

export const { create, deleteUser, updateUser } = reducer.actions;

export default reducer.reducer