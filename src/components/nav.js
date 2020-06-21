import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../components/css/nav.css';
import '../components/css/base.css';
import '../components/css/tackOn.css';

import FlippedHeaderGraphic from '../assets/graphics/FlippedHeaderGraphic.svg';

const Nav = () => {
	return (
		<div className="navContainer">
			<img className="flippedHeaderGraphic" src={FlippedHeaderGraphic} />
			<NavLink to="/">
				<img className="pointer" src={logo} />
			</NavLink>
			<nav>
				<NavLink to="/about" className="transitionAll">
					About
				</NavLink>

				<a
					href="https://www.dropbox.com/s/d32w0ripdrjvf0v/MattVaccaro%20-%202020%20-%20Resume.pdf?dl=0"
					target="#"
					className="transitionAll marginLeft30"
				>
					Resume
				</a>
			</nav>
		</div>
	);
};

export default Nav;
