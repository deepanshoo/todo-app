import { ADD_NOTE, DELETE_NOTE, MARK_COMPLETED, MARK_INCOMPLETED } from "./actionTypes";

export const addNote=(text)=>({
    type: ADD_NOTE,
    payload: { text },
})

export const deleteNote=(id)=>({
    type: DELETE_NOTE,
    payload: { id },
})
export const markNote=(id)=>({
    type: MARK_COMPLETED,
    payload: { id },
})
export const unmarkNote=(id)=>({
    type: MARK_INCOMPLETED,
    payload: { id },
})