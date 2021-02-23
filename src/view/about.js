import React from 'react';
import { motion } from 'framer-motion';


import profilePhoto from '../assets/photos/profilePhoto.png';
import dogsPhoto from '../assets/photos/dogsPhoto.png';
import weddingPhoto from '../assets/photos/weddingPhoto.png';
import Tag from '../utility/tag';

const About = () => {
	const loves = [
		'My Wife',
		'Dogs',
		'Metal',
		'Coding',
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
			className=" px-3 w-full mx-auto mt-6 sm:mt-28"
			style={{maxWidth: '1040px'}}
		>
			<img className="rounded-xl mb-6" src={profilePhoto} alt="Me and my dog Cady" />
			<h1 className="mb-12">
				I'm an energetic and goofy lad living in Nashville, TN with my super cool wife & beloved furballs.
			</h1>
			<div className="mb-12 sm:flex sm:justify-between">
				<div className="mb-6" >
					<img className=" mb-3 w-full sm:mr-6  sm:w-auto" style={{maxWidth: '500px'}} src={weddingPhoto} alt="Wife and I on our wedding day, she is very pretty!" />
					<h3 className="">In November of 2014 I married my best friend, Bethany.</h3>
				</div>
				<div className="mb-6 ">
					<img className="mb-3 w-full sm:w-auto" style={{maxWidth: '500px'}} src={dogsPhoto} alt="My two dogs" />
					<h3 className="">
						Cady (Boston Terrier) & George (Puggle) in their natural habitat, chilling.
					</h3>
				</div>
			</div>
			<h2 className="mb-3">
				In the last six years of being a Product designer I have had the fortune to work for amazing teams at
				Redfin, Capital One, GoNoodle, and run my own start up!
			</h2>
			<h3 className="mb-12">
				In these vastly different environments, I've gotten to encounter a wide array of frictions & processes that
				have enhanced my view on how to be a strong contributor to any organization. It has been a humbling
				half-decade (+1) that took a once egotistical, lone-wolf, and shaped him into a curious, collaborative, team
				player trying his best to remove every last drop of ego. I have energizer-bunny-like energy that I put
				forth on always improving; it's a gift and a curse I continue to try and balance.
			</h3>
			<div className="mb-12 sm:flex sm:justify-between">
				<div className="mb-6" style={{maxWidth:'500px'}}>
					<h2>Strengths</h2>
					<h3>
						<span >• Adaptive:</span> I can easily change to the needs of what is in front of me without
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
						often try to be overly verbose.
					</h3>
				</div>
				<div className="mb-6" style={{maxWidth:'500px'}}>
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
			<h2 className="mb-3 sm:mb-6" > What I Love</h2>
			<div className="flex flex-wrap">
				{loves.map((cv) => {
					return ( <div className="inline-flex sm:mb-3" > <Tag background="black" color="white" title={cv} key={Math.random}/> </div>
					);
				})}
			</div>
		</motion.div>
	);
};

export default About;
