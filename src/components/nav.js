import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../components/css/nav.css';
import '../components/css/base.css';
import '../components/css/tackOn.css';

import FlippedHeaderGraphic from '../assets/graphics/FlippedHeaderGraphic.svg';

const Nav = () => {
	return (
		<div className="navContainer">
			<motion.img
				initial={{ top: -200, opacity: '0%' }}
				animate={{ top: 0, opacity: '100%' }}
				transition={{ delay: 0, duration: 1 }}
				className="flippedHeaderGraphic"
				src={FlippedHeaderGraphic}
			/>
			<NavLink to="/">
				<motion.img
					initial={{ opacity: '0%' }}
					animate={{ opacity: '100%' }}
					transition={{ delay: 1.5, duration: 1 }}
					className="pointer"
					src={logo}
				/>
			</NavLink>
			<motion.nav
				initial={{ opacity: '0%' }}
				animate={{ opacity: '100%' }}
				transition={{ delay: 1.5, duration: 1 }}
			>
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
			</motion.nav>
		</div>
	);
};

export default Nav;
