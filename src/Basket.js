import React, { Component } from 'react';
import BasketItem from './BasketItem';
import './Basket.css';

class Basket extends Component {
	constructor(props) {
		super(props);
		this.state = {
			basketTotal: 0
		}
	}
	render() {
		let basketItems = this.props.basketProducts.map(bp => 
			<BasketItem 
				key={bp.P_ID}
				P_ID={bp.P_ID} 
				P_NAME={bp.P_NAME}
				P_IMG1={bp.P_IMG1}
				P_PRICE={bp.P_PRICE}
				P_QUANTITY={bp.P_QUANTITY}
				updateQuantity={this.props.updateQuantity}
			/>
		)
		
		//get total price for basket & set it to two decimal places
		let basketTotal = this.props.basketProducts.reduce((total, bp) => {
			return total + (bp.P_QUANTITY * bp.P_PRICE);
		}, 0);
		basketTotal = (Math.round(basketTotal * 100) / 100).toFixed(2);

		// display message if basket is empty
		let basketContent;
		if(basketItems.length < 1) {
			basketContent = 
			<div className="Basket-Empty">
				<h2>Your basket is empty, Add some items!</h2>
			</div>
		} else {
			basketContent = basketItems;
		}

		return(
			<div className="Basket">
				<div className="Basket-Content">
					<div className="Basket-Head">
						<h2 className="Basket-Title">Your Basket</h2>
						<h2><span>Your Total: </span>£{basketTotal}</h2>
						<div className="Basket-Btn">
							<button disabled={basketItems.length < 1}>Checkout</button>
						</div>
					</div>

					<div className="BasketItems-Container">
						{basketContent}
					</div>
				</div>
			</div>
		)
	}
}

export default Basket;