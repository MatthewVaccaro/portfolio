import React from 'react';
import '../components/css/base.css';

import chowLogo from "../assets/devAssets/chowLogo.svg"
import pureLogo from "../assets/devAssets/pureLogo.svg"
import gonoodleLogo from "../assets/devAssets/gonoodleLogo.svg"
import c1Logo from "../assets/devAssets/c1Logo.svg"

import Header from "../sections/header"
import SectionOne from "../sections/sectionOne"
import Project from "../sections/project"
import TwoCol from "../sections/twoCol"
import Technology from "../sections/technology"

import Button from "../utility/button"
import rightArrow from "../assets/devAssets/rightArrow.svg"

import {darkIcon} from "../utility/icon"
import CaseStudies from '../sections/caseStudies';

const Home = () => {
	const projectOne = [ darkIcon.react, darkIcon.redux, darkIcon.stripe, darkIcon.node, darkIcon.jest, darkIcon.ganalytics ]
	const projectTwo = [ darkIcon.node, darkIcon.puppeteer , darkIcon.react, darkIcon.hooks, darkIcon.framer, darkIcon.tailwind ]
	return (
		
		<div className="px-3 mx-auto w-full sm:px-0" style={{maxWidth: "1040px"}} >
			<Header/>
			<SectionOne/>
			<h1> Work </h1>
			<p className=" text-lg" > These are my current favorite projects, view all of my work <a className="text-black text-lg" href="https://github.com/MatthewVaccaro" target="blank" > @Github </a> </p>
			<Project image={pureLogo} icons={projectOne} link="https://github.com/MatthewVaccaro" title="eCommerce CMS" info="Team of 6  |  4 Months  |  Build on project @Lambda" content="I lead the majority of the planning & execution of the Frontend. Assisted teammates in data minipulation & component archecture. Implemented Stripe Connect, Google Analytics, created how product variants work, wrote a large portion of the logic for the store-front" />

			<div className="bg-black_100 rounded" style={{height: "2px"}} />

			<Project image={chowLogo} icons={projectTwo} link="https://github.com/MatthewVaccaro" title="Dish Search Engine" info="Since Dec 2020  |  Personal Project" content="Building a search engine that will allow users to find restaurants based on what they want to eat. Node.JS backend, Posgres database, hosted on Heroku. Frontend in React (later moving to React Native), UseContext, and Tailwind for styling." />
			<CaseStudies linkOne="https://medium.com/@Matt.Forerunner/working-at-gonoodle-2b3779cd1278" imageOne={gonoodleLogo} titleOne="GoNoodle" subInfoOne="Kids Eduaction" linkTwo="https://medium.com/swlh/capital-one-order-system-case-study-dcc87598d483" imageTwo={c1Logo} titleTwo="Capital One" subInfoTwo="eCommerce CMS" />
			
			<TwoCol titleOne="My Dev community & teaching others " contentOne={`The Spread Dev community is a language agnostic community my childhood friend Ben Wilson and I created. For the last nine months I have helped dozens of engineers improve their problem solving skills, write code in a more thoughtful ways and how to think about short & long term code scaleability.`} titleTwo="1000+ hours coding while attending Lambda" contentTwo="Between August of 2019 and November of 2020 I spent every night going to Lambda lectures and learning how to code. Not only did I become proficient in JS and Python but I learned how to problem solve and think about architecture on a deep level. It was a year of panic attacks and crippling self doubt; but now, there isn’t a Goliath sized problem I don’t throughly enjoy demolishing, in fact I hunt them." buttonOne={ <Button text="Learn More" color="black" image={rightArrow}  /> } />

			<Technology/>
		</div>
	);
};

export default Home;