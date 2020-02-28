const partyTemplateReducer = ( state=[], action) => {
  switch (action.type){
    case "FETCH_TEMPLATES":
      return action.payload
    case "ADD_TEMPLATE":
      return [...state, action.payload]
     case "ADD_ITEM":
     	return action.payload
    default:
      return state
  }
}

export default partyTemplateReducer
