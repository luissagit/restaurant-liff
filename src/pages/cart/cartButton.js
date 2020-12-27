const CartButton = ({ loading, inCart }) => {
	if(loading) {
		return <div></div>
	} else if(!loading && inCart) {
		return(
			<div className="flex justify-between items-center fixed bottom-0 left-0 w-screen p-4">
				<div className="w-full text-center bg-gray-400 p-2 rounded-md text-white font-semibold">Add to cart</div>
			</div>
		)
	} else if(inCart === false){
		return(
			<div className="flex justify-between items-center fixed bottom-0 left-0 w-screen p-4">
				<button className="w-full text-center bg-green p-2 rounded-md text-white font-semibold" onClick={() => handleAddToCart()}>Add to cart</button>
			</div>
		);
	} else {
		return <div></div>
	}
}

export default CartButton;