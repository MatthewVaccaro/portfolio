import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import '../css/HomeCss/home.css';
import '../css/HomeCss/homeTablet.css';
import '../css/HomeCss/homeMobile.css';
import '../css/tackOn.css';
import '../css/base.css';

import GoNoodleLogo from '../../assets/logos/GoNoodleLogo.svg';
import ContributionLogo from '../../assets/logos/ContributionLogo.svg';
import AromaLogo from '../../assets/logos/AromaLogo.svg';
import CapitalOneLogo from '../../assets/logos/CapitalOneLogo.svg';

const Home = () => {
	const workData = [
		{
			logo: GoNoodleLogo,
			company: 'GoNoodle',
			title: 'Product Designer',
			hover: 'hoverPurple',
			link: 'https://medium.com/@Matt.Forerunner/working-at-gonoodle-2b3779cd1278'
		},
		{
			logo: AromaLogo,
			company: 'Aroma',
			title: 'Co-Founder & Product Designer',
			hover: 'hoverGreen',
			link: 'https://medium.com/@Matt.Forerunner/aroma-creating-my-first-tech-start-up-c2a9cbcadca8'
		},
		{
			logo: ContributionLogo,
			company: 'Contribution',
			title: 'Product Designer & FrontEnd Dev',
			hover: 'hoverBlue',
			link: 'https://medium.com/@Matt.Forerunner/contribution-case-study-3f23a31668d4'
		},
		{
			logo: CapitalOneLogo,
			company: 'Capital One',
			title: 'UX Designer',
			hover: 'hoverRed',
			link: 'https://medium.com/swlh/capital-one-order-system-case-study-dcc87598d483'
		}
	];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<motion.div
			initial={{ opacity: '0%' }}
			animate={{ opacity: '100%' }}
			transition={{ delay: 1 }}
			className="headerMain"
		>
			<div className="headerContentContainer max-width750">
				<div className="headline">
					<motion.h2
						animate={{
							rotate: [ 0, 50, 0, 50, -25, 0 ]
						}}
						transition={{
							delay: 2,
							duration: 0.5,
							ease: 'easeInOut',
							loop: Infinity,
							repeatDelay: 3
						}}
						className="marginRight10"
					>
						🤙
					</motion.h2>
					<h2>What's Up!</h2>
				</div>

				<h1> I’m Matt! A Product Designer, code enthusiast, & dog lover!</h1>
				<h3 className=" max-width750 marginBottom20">
					I’m obsessed with connecting the dots between user needs, business goals, and feasibility. I relish
					in refining processes, evolving products, and growing with a team. I love to simplify complexities
					and working with awesome humans to make dope products!
				</h3>

				<div>
					<p className="badge">• Available for full-time opportunities </p>
				</div>
			</div>
			<section className="workSection ">
				<div className="workHeader marginBottom50">
					<h2 className="marginRight10 marginBottom0"> My Work </h2>
					<h3> All projects link out to Medium articles</h3>
				</div>
				<div className="workLayout">
					{workData.map((cv) => {
						return <ProjectCards data={cv} key={Math.random()} />;
					})}
				</div>
			</section>
		</motion.div>
	);
};

export default Home;

const ProjectCards = ({ data }) => {
	return (
		<div className="singleWorkContainer">
			<a href={data.link} target="#" className="pointer ">
				<div className={`imageContainer ${data.hover} transitionAll  `}>
					<img className="logos transitionAll width60" src={data.logo} />
				</div>

				<h3 className={`roboto weight700 lineHeightReset marginTop15`}> {data.company}</h3>
				<p className={`roboto marginBottom20`}> {data.title} </p>
			</a>
		</div>
	);
};
