import React from 'react';
import { NavLink } from 'react-router-dom';

import './css/footer.css';
import './css/footerTablet.css';
import './css/footerMobile.css';

import FooterGraphic from '../assets/graphics/FooterGraphic.svg';
import logoLight from '../assets/logoLight.svg';
import Twitter from '../assets/twitter.svg';
import LinkedIn from '../assets/linkedIn.svg';

const Footer = () => {
	return (
		<div className="footer">
			<img className="footerGraphic" src={FooterGraphic} />
			<div className="footerBackground">
				<div className="footerContainer">
					<h2 className="WhiteMainText"> Let’s work together!</h2>
					<h3 className="max-width750 WhiteSecondText marginBottom30 ">
						I have learned it doesn't matter what cool tech you get to work on or the fancy perks. I will
						always love designing, but culture & humans trump everything! In my next role, I am looking for
						amazing humans to kickass with!
					</h3>
					<p className=" email transitionAll pointer WhiteMainText "> Matthew.Tylor.Vaccaro@gmail.com</p>
					<div className="footerCap">
						<NavLink to="/">
							<img src={logoLight} />
						</NavLink>
						<div className="socialMedia">
							<a href="https://twitter.com/EarHolesMcgee" target="#">
								<img className="pointer" src={Twitter} />
							</a>
							<a href="https://www.linkedin.com/in/matthew-vaccaro-409158119/" target="#">
								<img className=" testy pointer marginLeft15" src={LinkedIn} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
