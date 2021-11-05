import React, { Component } from 'react';
import Header from './Header';
import ProductHolder from './ProductHolder';
import Basket from './Basket';
import Footer from './Footer';
import ProductData from './ProductData';
import './ProductsPage.css';

class ProductsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: ProductData,
			basketProducts: []
		}
		this.updateQuantity = this.updateQuantity.bind(this);
	}

	//updates quantity of item, and updates basket
	updateQuantity(P_ID, newQuantity) {
		//update quantity of item
		let newProducts = this.state.products.map(p =>
			(p.P_ID === P_ID) ?
				{...p, P_QUANTITY: newQuantity}
				: p
		);
			
		//update basket
		let newBasket = [...this.state.basketProducts];
		//find if P_ID in in basket
		if(newBasket.filter(p => p.P_ID === P_ID).length > 0) {
			//newQuantity is 0 remove from array
			if(newQuantity === 0) {
				newBasket = newBasket.filter(p => {
					return p.P_ID !== P_ID;
				});
			} else {
				//else, update the basketproduct quantity
				newBasket = newBasket.map(p =>
					(p.P_ID === P_ID) ?
						{...p, P_QUANTITY: newQuantity}
						: p
				);
			}
		} else {
			//if not in basket, add new product
			let newProduct = newProducts.find(p => 
				p.P_ID === P_ID
			);	
			newBasket.push(newProduct);
		}
		this.setState({ products: newProducts, basketProducts: newBasket });
	}

	render() {
		return(
			<div className="Products-Page">
				<Header />
				<div className="Page-Container">
					<div className="Page-Products">
						<ProductHolder products={this.state.products} updateQuantity={this.updateQuantity} />
					</div>
					<div className="Page-Basket">
						<Basket basketProducts={this.state.basketProducts} updateQuantity={this.updateQuantity}/>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default ProductsPage;