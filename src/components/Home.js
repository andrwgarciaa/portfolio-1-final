import { useState } from 'react';
import Navbar from './Navbar';
import Credits from './Credits';
const Home = () => {
	const [time, setTime] = useState();

	setInterval(() => {
		let date = new Date();
		let hour = date.getHours();

		if (hour >= 0 && hour < 12) {
			setTime('Morning');
		} else if (hour >= 12 && hour < 17) {
			setTime('Afternoon');
		} else if (hour >= 17 && hour < 21) {
			setTime('Evening');
		} else {
			setTime('Night');
		}
	}, 1);

	return (
		time && (
			<>
				<section className="container">
					<div className="greetings">
						<h1 className="text-primary">
							Good{' '}
							<span className="times">
								<span>{time}!</span>
								<img src={`img/${time}.png`} alt="time icon" />
							</span>
						</h1>
						<p className="text-detail">
							Welcome to my personal web development portfolio.
						</p>
					</div>
					<Navbar />
				</section>
				<Credits />
			</>
		)
	);
};

export default Home;
