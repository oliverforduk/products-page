import React, { Component } from 'react';
import ProductItem from './ProductItem';
import './ProductHolder.css';

class ProductHolder extends Component {
	render() {
		let products = this.props.products.map(p =>
			<ProductItem
				key={p.P_ID}
				P_ID={p.P_ID} 
				P_TYPE={p.P_TYPE}
				P_NAME={p.P_NAME}
				P_PRICE={p.P_PRICE}
				P_QUANTITY={p.P_QUANTITY}
				P_IMG1={p.P_IMG1}
				P_IMG2={p.P_IMG2}
				updateQuantity={this.props.updateQuantity}
			/>
		)
		return(
			<div className="Product-Holder">
				{products}

				<div className="Pagination">
					<div className="Pagination-Info">
						<p>Showing <span>1 to 12</span> of <span>12 items</span></p>
					</div>
					<div className="Pagination-Btns">
						<button disabled>{String.fromCharCode(8592)}</button>
						<div className="Pagination-Page">1</div>
						<button disabled>{String.fromCharCode(8594)}</button>
					</div>
				</div>
			</div>
		)
	}
}

export default ProductHolder;