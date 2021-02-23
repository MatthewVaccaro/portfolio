import React from 'react';
import { NavLink } from 'react-router-dom';



import FooterGraphic from '../assets/graphics/FooterGraphic.svg';
import logoLight from '../assets/logoLight.svg';
import Twitter from '../assets/twitter.svg';
import LinkedIn from '../assets/linkedIn.svg';
import githubLogo from "../assets/devAssets/githubLogo.svg"

const Footer = () => {
	return (
		<div>
			<img className="w-full" src={FooterGraphic}/>
		<div className="bg-black w-full py-10 px-3" >
			<div className="mx-auto " style={{maxWidth: "1040px"}}>
			<div style={{maxWidth: '800px'}}>
			<h2 className="text-white mb-4 sm:mb-12 " >Let’s work together!</h2>
			<h3 className="text-white opacity-80 mb-8"> I have learned it doesn't matter what cool tech you get to work on or the fancy perks. I love to code but culture & humans trump everything! In my next role, I am looking for amazing humans to kickass with! Sounds like your team? Hit me up!</h3>

			<p className="uppercase text-white mb-12 cursor-pointer hover:text-red transition-all duration-300" > Matthew.tylor.vaccaro@gmail.com </p>
			</div>

			<div className="flex justify-between items-center">
				<img src={logoLight} alt="personal Logo that say Matt" />
					<div className="flex" >
						<a href="https://twitter.com/EarHolesMcgee" target="black">
							<img className="mr-6 cursor-pointer" src={Twitter} alt="Twitter Logo" />
						</a>
						<a href="https://www.linkedin.com/in/matthew-vaccaro-409158119/" target="black">
							<img className="mr-6 cursor-pointer" src={LinkedIn} alt="LinkedIn Logo" />
						</a>
						<a href="https://github.com/MatthewVaccaro" target="black">
							<img className="cursor-pointer" style={{width: "32px", height: 	"32px"}} src={githubLogo} alt="Github logo" />
						</a>
					</div>
			</div>
			</div>
			</div>

			
		
		</div>
	);
};

export default Footer;
