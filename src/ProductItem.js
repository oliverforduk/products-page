import React, { Component } from 'react';
import './ProductItem.css';

class ProductItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			curQuantity: 0
		}
		this.upQuantity = this.upQuantity.bind(this);
		this.lowerQuantity = this.lowerQuantity.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
	}

	//ups & lowers the curQuantity, add button updates prop quantity
	upQuantity() {
		this.setState({curQuantity: this.state.curQuantity + 1});
	}
	lowerQuantity() {
		if(this.state.curQuantity > 0) {
			this.setState({curQuantity: this.state.curQuantity - 1});
		}
	}
	handleUpdate() {
		this.props.updateQuantity(this.props.P_ID, this.state.curQuantity);
	}

	render() {
		let { P_TYPE, P_NAME, P_PRICE, P_QUANTITY, P_IMG1 } = this.props;
		return(
			<div className={`Product-Item ${P_QUANTITY > 0 ? "In-Basket" : ""}`}>
				<div className="Product-Content">

					<div className="Product-Img">
						<img src={P_IMG1} alt={P_NAME}/>
					</div>

					<div className="Product-Info">
						<h2 className="Info-Type">{P_TYPE}</h2>
						<p className="Info-Name">{P_NAME}</p>
						<p className="Info-Price">{P_PRICE}</p>
					</div>

					<div className="Product-Btns">
						<div className="Btns-Quantity">
							<button className="Btn-Minus" onClick={this.lowerQuantity}>-</button>
							<span>{this.state.curQuantity}</span>
				 			<button onClick={this.upQuantity}>+</button>
						</div>
						<div className="Btns-Basket">
							<button disabled={this.state.curQuantity === P_QUANTITY} onClick={this.handleUpdate}>Add</button>
						</div>
					</div>
					<div className="Product-Basket">
							<h2>{P_QUANTITY} in basket</h2>
					</div>
				</div>
			</div>
		)
	}
}

export default ProductItem;