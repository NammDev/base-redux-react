const initialState = {
  list: ['Listening to music'],
  selectedId: null,
}

const hobbyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_HOBBY': {
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

export default hobbyReducer
