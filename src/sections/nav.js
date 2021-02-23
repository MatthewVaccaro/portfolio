import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';



import FlippedHeaderGraphic from '../assets/graphics/FlippedHeaderGraphic.svg';

const Nav = () => {
	return (
		<div className="w-full px-3 py-5 mx-auto flex justify-between items-center sm:px-0" style={{maxWidth: '1040px'}}>
			<motion.img
				initial={{ top: -200, opacity: '0%' }}
				animate={{ top: 0, opacity: '100%' }}
				transition={{ delay: 0, duration: 1 }}
				className=" absolute top-0 right-0 w-full"
				style={{zIndex: '-10'}}
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
				<NavLink to="/about" className=" transition-all duration-300 z-10">
					About
				</NavLink>

				<a
					href="https://www.dropbox.com/s/d32w0ripdrjvf0v/MattVaccaro%20-%202020%20-%20Resume.pdf?dl=0"
					target="#"
					className="transition-all ml-7 z-10"
				>
					Resume
				</a>
			</motion.nav>
		</div>
	);
};

export default Nav;
