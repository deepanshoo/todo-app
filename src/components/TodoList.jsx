import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes);

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      dispatch({ type: 'LOAD_NOTES', payload: JSON.parse(savedNotes) });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <ul>
      <li className="my-2 text-sm italic text-white">All Your Notes Here...</li>
      {notes.map((note, index) => (
        <TodoItem key={index} note={note} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;