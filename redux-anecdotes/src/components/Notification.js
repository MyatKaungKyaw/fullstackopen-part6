import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector((reducer) => reducer.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <>
      {notification !== '' &&
        <div style={style} >
          {notification}
        </div >
      }
    </>
  )
}

export default Notification