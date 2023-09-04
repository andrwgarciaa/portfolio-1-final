import { useState } from 'react';
import Navbar from './Navbar';
import Credits from './Credits';

const Projects = () => {
	const [showcaseIndex, setShowcaseIndex] = useState(0);
	const project = [
		{
			name: 'Portfolio',
			web_url: 'https://andrwgarciaa.me/',
			github_url: 'https://github.com/andrwgarciaa/portfolio',
			description:
				'My own personal portfolio webpage. Designed and developed alone, according to my taste.',
		},
		{
			name: 'Medicare',
			web_url: 'https://amdp-1.netlify.app/',
			github_url: 'https://github.com/andrwgarciaa/amdp-1',
			description:
				'Vanilla HTML, CSS, JS website for company interview. My very first website.',
		},
	];
	const handleShowcase = (e, index) => {
		const newDot = e.target;
		const dots = [...document.querySelectorAll('.dot')];
		dots.map((item) => {
			item.classList.remove('active');
			return null;
		});
		newDot.classList.add('active');
		setShowcaseIndex(index);
	};
	return (
		<>
			<section className="container">
				<div className="project-card-container">
					<div className="project-card">
						<div className="project">
							<div className="capture">
								<img
									key={project[showcaseIndex].name}
									src={`img/${project[showcaseIndex].name}.png`}
									alt={project[showcaseIndex].name}
								/>
								<legend className="project-url text-detail">
									{project[showcaseIndex].web_url}
								</legend>
							</div>
							<p className="project-description text-primary">
								{project[showcaseIndex].description}
							</p>
							<div className="project-links">
								<a
									href={project[showcaseIndex].github_url}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="img/GithubIcon.png"
										alt="github icon"
									/>
									GitHub
								</a>
								<a
									href={project[showcaseIndex].web_url}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="img/BrowserIcon.png"
										alt="browser icon"
									/>
									Visit Page
								</a>
							</div>
						</div>
					</div>

					<div className="project-nav">
						<div
							className="dot active"
							onClick={(e) => handleShowcase(e, 0)}
						></div>
						<div
							className="dot"
							onClick={(e) => handleShowcase(e, 1)}
						></div>
					</div>
				</div>
				<Navbar />
			</section>
			<Credits />
		</>
	);
};

export default Projects;
