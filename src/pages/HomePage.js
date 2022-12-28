import { useSelector, useDispatch } from 'react-redux'

function HomePage() {
  const hobbyList = useSelector((state) => state.hobby.list)
  const todoList = useSelector((state) => state.todo.list)

  const dispatch = useDispatch()

  const handleAdd = () => {
    dispatch({
      type: 'ADD_HOBBY',
      payload: 'Coding',
    })
  }

  return (
    <div className='home-page'>
      <div className='hobby'>
        <h3>Hobby List</h3>
        <ul>
          {hobbyList.map((list, i) => (
            <li key={i}>{list}</li>
          ))}
        </ul>
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className='todo'>
        <h3>Todo List</h3>
        <ul>
          {todoList.map((list, i) => (
            <li key={i}>{list}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HomePage
