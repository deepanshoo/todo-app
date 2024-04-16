import { ADD_NOTE, DELETE_NOTE, MARK_COMPLETED, MARK_INCOMPLETED } from "./actionTypes";

const initialState = { 
    notes: []
};


const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, { text: action.payload.text, completed: false }]
            };
        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter((note, index) => index !== action.payload.id)
            };
        case MARK_COMPLETED:
            return {
                ...state,
                notes: state.notes.map((note, index) =>
                    index === action.payload.id ? { ...note, completed: true } : note
                )
            };
        case MARK_INCOMPLETED:
            return {
                ...state,
                notes: state.notes.map((note, index) =>
                    index === action.payload.id ? { ...note, completed: false } : note
                )
            };
        default:
            return state; 
    }
};

export default noteReducer;

