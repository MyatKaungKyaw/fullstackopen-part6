import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(({ anecdotes }) => (
    anecdotes.map(anecdote => <div key={anecdote.id}>{anecdote.content}</div>)
  ))
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification