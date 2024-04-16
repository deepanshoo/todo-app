import { useDispatch } from 'react-redux';
import {
  deleteNote,
  markNote,
  unmarkNote,
} from '../redux/actions';
import { FaTrash, FaCheck, FaTimes } from 'react-icons/fa';

const TodoItem = ({ note, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col sm:flex-row text-white sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-white">
          {index + 1}.
        </span>
        <span className={`mr-4 ${note.completed ? 'line-through text-gray-500' : ''}`}>
          {note.text}
        </span>
      </div>
      <div className='space-x-3 ml-8'>
        <button
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(deleteNote(index))}
        >
          <FaTrash />
        </button>
        {!note.completed && (
          <button
            className="text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markNote(index))}
          >
            <FaCheck />
          </button>
        )}
        {note.completed && (
          <button
            className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(unmarkNote(index))}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;