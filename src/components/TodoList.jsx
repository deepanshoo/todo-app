import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const filteredNotes = useSelector(state => {
    console.log("State:", state); 
    return state.notes 
  });

  console.log("notes:", filteredNotes); 

  return (
    <ul>
      <li className="my-2 text-sm italic text-white">All Your Notes Here...</li>
      {filteredNotes.map((note, index) => (
        <TodoItem key={index}  note={note} index={index} />
      ))}
    </ul>
  )
};

export default TodoList;