export const AddressReducer = (state, action) => {
	switch(action.type) {
		case 'EDIT_ADDRESS' :
			return {
				address: action.newAddress
			}
		default :
			return state;
	}
}