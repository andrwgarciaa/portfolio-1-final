const Tech = ({ name }) => {
	return (
		<div className="tech">
			<img src={`img/${name}Icon.png`} alt={`${name} icon`} />
		</div>
	);
};

export default Tech;
