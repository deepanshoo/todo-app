import { ADD_NOTE, DELETE_NOTE, MARK_COMPLETED, MARK_INCOMPLETED } from "./action.Types";

const initialState={
    notes:[]
}

const noteReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_NOTE:
            return {
                notes: [...state.notes, { text: action.payload.text, completed: false }]
            };
        case DELETE_NOTE:
            return {
                notes: state.notes.filter((note, index) => index !== action.payload.id)
            };
        case MARK_COMPLETED:
            return {
                notes: state.notes.map((note, index) =>
                index === action.payload.id ? { ...note, completed: true } : note
                )
            };
        case MARK_INCOMPLETED:
            return {
                notes: state.notes.map((note, index) =>
                index === action.payload.id ? { ...note, completed: false } : note
                )
            };
        default:
            break;
    }
}

export default noteReducer;