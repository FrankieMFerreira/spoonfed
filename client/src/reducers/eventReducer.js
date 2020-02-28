const eventReducer = (state={}, action) => {
  switch(action.type){
    case "ADD_EVENT":
      return action.payload
    case "SET_EVENT":
      return action.payload
    default:
      return state
  }

}

export default eventReducer
