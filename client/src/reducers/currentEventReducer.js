const currentPartyTemplateReducer = (state={}, action) => {
  switch(action.type){
    case "UPDATE_CURRENT_EVENT":
      return action.payload
    case "SET_EVENT":
      return action.payload
    default:
      return state
  }

}

export default currentPartyTemplateReducer
