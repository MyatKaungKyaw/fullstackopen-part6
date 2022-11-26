import { useSelector, useDispatch } from 'react-redux'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'

const App = () => {
  return (
    <div>
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

export default App