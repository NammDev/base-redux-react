const initialState = {
  list: ['Rua bat'],
  selectedId: null,
}

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_TODO': {
      const newList = [...state.list]
      newList.push(payload)
      return {
        ...state,
        list: newList,
      }
    }
    default:
      return state
  }
}

export default todoReducer
