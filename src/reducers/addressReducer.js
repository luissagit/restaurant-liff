export const AddressReducer = (state, action) => {
	switch(action.type) {
		case 'EDIT_ADDRESS' :
			return action.newAddress;
		default :
			return state;
	}
}