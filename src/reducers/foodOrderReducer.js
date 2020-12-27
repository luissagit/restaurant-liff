export const FoodOrderReducer = (state, action) => {
	switch(action.type) {
		case 'ADD_TO_CART' :
			return [...state, {
				id: action.food.id,
				name: action.food.name,
				quantity: action.food.quantity,
				price: action.food.price
			}];
		case 'EDIT_ORDER' :
			return action.foods;
		default :
			return state;
	}
}