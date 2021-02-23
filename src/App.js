import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './view/home';
import About from './view/about';
import Nav from './sections/nav';
import Footer from './sections/footer';

function App() {
	return (
		<div className="App">
			<Nav />
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Footer />
		</div>
	);
}

export default App;
