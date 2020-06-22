import React from 'react';
import { motion } from 'framer-motion';
import '../css/aboutCss/about.css';
import '../css/aboutCss/aboutTablet.css';
import '../css/aboutCss/aboutMobile.css';

import profilePhoto from '../../assets/photos/profilePhoto.png';
import dogsPhoto from '../../assets/photos/dogsPhoto.png';
import weddingPhoto from '../../assets/photos/weddingPhoto.png';

const About = () => {
	const loves = [
		'My Wife',
		'Dogs',
		'Metal',
		'PowerLifting',
		'The Office',
		'Hip-Hop',
		'React Js',
		'Hiking',
		'drumming',
		'What we do in the shadows',
		'burgers',
		'Rocket League',
		'Waterfalls',
		'JoJo Rabbit',
		'French Fries',
		'Mountain Dew',
		'Motorcycles',
		'Queer Eye',
		'Videography',
		'live Music',
		'Making ToDo Lists',
		'Chilling',
		'Learning'
	];

	return (
		<motion.div
			initial={{ opacity: '0%' }}
			animate={{ opacity: '100%' }}
			transition={{ delay: 1 }}
			className="headerMain"
		>
			<img className=" profilePhoto marginTop150 marginBottom50 width100" src={profilePhoto} />
			<h1 className="marginBottom50">
				I'm an energetic and goofy lad living in Nashville, TN with my super cool wife & beloved furballs.
			</h1>
			<div className="twoColumnsContainer marginBottom100 width100">
				<div className="singleColumns  ">
					<img className=" colPhoto max-width500 marginBottom30 width100 " src={weddingPhoto} />
					<h3 className=" max-width500 width100 ">In November of 2014 I married my best friend, Bethany.</h3>
				</div>
				<div className="divider" />
				<div className="singleColumns ">
					<img className="colPhoto max-width500 marginBottom30 width100 " src={dogsPhoto} />
					<h3 className="max-width500 width100 ">
						Cady (Boston Terrier) & George (Puggle) in their natural habitat, chilling.
					</h3>
				</div>
			</div>
			<h2 className="marginBottom30">
				In the last five years of being a Product designer I have had the fortune to work for amazing teams at
				Capital One, GoNoodle, and run my own start up!
			</h2>
			<h3 className="marginBottom100">
				In these vastly different environments, I got to encounter a wide array of frictions & processes that
				have enhanced my view on how to be a strong contributor to any organization. It has been a humbling
				half-decade that took a once egotistical, lone-wolf, and shaped him into a curious, collaborative, team
				player trying his best to remove every last drop of ego. I have energizer-bunny-like energy that I put
				forth on always improving; it's a gift and a curse I continue to try and balance.
			</h3>
			<div className="twoColumnsContainer marginBottom100">
				<div className="singleColumns max-width500">
					<h2>Strengths</h2>
					<h3>
						<span>• Adaptive:</span> I can easily change to the needs of what is in front of me without
						dropping a beat.
					</h3>
					<br />
					<br />
					<h3>
						<span>• Collaborative:</span> Problems are multidimensional and need other perspectives to
						create a high-quality solution!
					</h3>
					<br />
					<br />
					<h3>
						<span>• Communicator:</span> I am considerate of my audience, their communication streams, and
						often try to be overly verbose.{' '}
					</h3>
				</div>
				<div className="divider" />
				<div className="singleColumns max-width500 ">
					<h2>Values</h2>
					<h3>
						<span>• Team Empathy:</span> Being mindful of my team and making decisions that will impact them
						positively.
					</h3>
					<br />
					<br />
					<h3>
						<span>• Fearlessness:</span> I will openly ask questions, present ideas, and challenges the
						status quo without fear of how I might be perceived.
					</h3>
					<br />
					<br />
					<h3>
						<span>• Perpetual Improvement:</span> “The more I learn, the more I realize how much I don't
						know.” ― Albert Einstein
					</h3>
					<br />
					<br />
					<h3>
						<span>• Transparency:</span> Even when it comes at my own expense, I'm upfront with my actions
						and the reasons for them.
					</h3>
				</div>
			</div>
			<h2> What I Love</h2>
			<div className="lovesContainer marginBottom100">
				{loves.map((cv) => {
					return (
						<div className="pills marginRight15 marginBottom15">
							<p className="pillContents">{cv}</p>
						</div>
					);
				})}
			</div>
		</motion.div>
	);
};

export default About;
