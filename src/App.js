import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/view/Home';
import About from './components/view/about';
import Nav from './components/nav';
import Footer from './components/footer';

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
