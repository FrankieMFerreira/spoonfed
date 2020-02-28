const currentPartyTemplateReducer = (state={}, action) => {
  switch(action.type){
    case "UPDATE_CURRENT_TEMPLATE":
      return action.payload
    case "SET_TEMPLATE":
      return action.payload
    default:
      return state
  }

}

export default currentPartyTemplateReducer
