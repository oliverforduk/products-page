import React, { Component } from 'react';
import './BasketItem.css';

class BasketItem extends Component {
	constructor(props) {
		super(props);
		this.upQuantity = this.upQuantity.bind(this);
		this.lowerQuantity = this.lowerQuantity.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
	}

	//all changes (up, lower, & remove) change prop quantity
	upQuantity() {
		let newQuantity = this.props.P_QUANTITY +1;
		this.props.updateQuantity(this.props.P_ID, newQuantity);
	}
	lowerQuantity() {
		let newQuantity = this.props.P_QUANTITY -1;
		this.props.updateQuantity(this.props.P_ID, newQuantity);
	}
	handleRemove() {
		this.props.updateQuantity(this.props.P_ID, 0);
	}

	render() {
	let { P_NAME, P_PRICE, P_QUANTITY, P_IMG1 } = this.props;

	//get total price for item & set it to two decimal places
	let itemTotal = P_PRICE * P_QUANTITY;
	itemTotal = (Math.round(itemTotal * 100) / 100).toFixed(2);

	return(
		
		<div className="Basket-Item">
			<div className="Item-Content">

				<div className="Item-Head">
					<p>{P_NAME}</p>
					<button onClick={this.handleRemove}>x</button>
				</div>

				<div className="Item-Details">
					<img src={P_IMG1} alt={P_NAME} />
					<div className="Item-Btns">
						<button onClick={this.upQuantity}>+</button>
						<p>{P_QUANTITY}</p>
						<button className="Btn-Minus" onClick={this.lowerQuantity}>-</button>
					</div>

					<div className="Item-Price">
						<p>{itemTotal}</p>
					</div>
				</div>
			</div>
		</div>
	)
	}
}

export default BasketItem;