import Credits from './Credits';
import Navbar from './Navbar';
import Tech from './Tech';

const About = () => {
	return (
		<>
			<section className="container">
				<div className="stack">
					<Tech name="HTML" />
					<Tech name="CSS" />
					<Tech name="Javascript" />
					<Tech name="React" />
					<Tech name="Node" />
					<Tech name="Express" />
					<Tech name="Mongo" />
					<Tech name="MySql" />
				</div>
				<Navbar />
			</section>
			<Credits />
		</>
	);
};

export default About;
