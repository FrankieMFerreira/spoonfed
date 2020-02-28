const userReducer = (state='', action) => {
	switch(action.type){
	case "CREATE_USER":
		return action.payload.data.id
	case  "GET_USER":
	  return action.payload
	case  "LOGIN_USER":
		return action.payload.data.id
	default:
		return state
	}
}

export default userReducer
