import React from 'react';
import './assets/css/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {
	return (
		<div className="App">
			<div className="container">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/tech-stack" element={<TechStack />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contacts" element={<Contacts />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
