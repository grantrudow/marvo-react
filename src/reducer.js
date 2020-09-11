export const initialState = {
	user: null,
	items: []
};

// Selector

const reducer = (state, action) => {
	console.log(action);

	switch(action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user
			}

		case 'EMPTY_BASKET':
			return {
				...state,
				basket: []
			}
		default:
			return state
	}
};

export default reducer;