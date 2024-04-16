import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import Note from './components/Note'
function App() {

  return (
    <Provider store={store}>
      <Note/>
    </Provider>
  )
}

export default App
