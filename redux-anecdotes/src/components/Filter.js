import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()
    const filter = useSelector(({ filter }) => filter)

    const handleChange = (event) => {
        const filter = event.target.value
        dispatch(changeFilter(filter))
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange} value={filter}/>
        </div>
    )
}

export default Filter