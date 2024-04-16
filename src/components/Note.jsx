
import { useState, useEffect } from 'react';
import { BsPlus } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../redux/actions';
import TodoList from './TodoList';

const Note = () => {
  const [newNoteText, setNewNoteText] = useState('');
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

  const handleAddNote = () => {
    if (newNoteText.trim() !== '') {
      dispatch(addNote(newNoteText.trim()));
      setNewNoteText('');
    }
  };

  return (
    <div className="bg-gray-500 min-h-screen">
      <div className="max-w-4xl mx-auto mt-8 p-4 bg-gray-900 rounded-lg">
        <h2 className="mt-8 mb-6 text-2xl font-bold text-center uppercase text-white">TODO APP</h2>
        <div className="flex items-center mb-4">
          <input
            id="addNoteInput"
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg bg-gray-800 text-white"
            type="text"
            placeholder="Add Note"
            value={newNoteText}
            onChange={(e) => setNewNoteText(e.target.value)}
          />
          <button
            className="ml-4 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            onClick={handleAddNote}
          >
            <BsPlus size={20} />
          </button>
        </div>
        <TodoList />
      </div>
    </div>
  );
};

export default Note;
