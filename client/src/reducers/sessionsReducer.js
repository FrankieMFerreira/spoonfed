const sessionsReducer = (state=false, action) => {
	switch(action.type){
	case "CREATE_USER":
		return true
	case  "LOGIN_USER":
		return true
  case "LOGOUT_USER":
    return false
  case "SESSION_VERIFY":
    return true
	default:
		return state
	}
}

export default sessionsReducer
