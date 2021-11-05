import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	render(){
		return(
			<div className="Page-Head">
				<div className="Header">
					<div className="Header-Content">
						<li className="Header-Brand">Products</li>
						<div className="Header-Options">
							<li>Register</li>
							<li>Sign In</li>
						</div>
					</div>
				</div>

				<div className="Category">
					<li className="Category-Active">Food and Drink</li>
					<li>Other Products</li>
				</div>
			</div>
		)
	}
}

export default Header;