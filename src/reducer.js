export const initialState = {
	user: null,
	items: [],
	isLoggedIn: false
};

// Selector

const reducer = (state, action) => {
	console.log(action);

	switch(action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
				isLoggedIn: action.isLoggedIn
			}

		default:
			return state
	}
};

export default reducer;