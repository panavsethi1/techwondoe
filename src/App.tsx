import React from 'react';
import './App.css';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Team from './components/Team/Team';
import News from './components/News/News';
import Profiles from './components/Profiles/Profiles';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';

function App() {
	return (
		<div>
			<Hero />
			<About />
			<Team />
			<News />
			<Profiles />
			<CTA />
			<Footer />
			<Copyright />
		</div>
	);
}

export default App;
