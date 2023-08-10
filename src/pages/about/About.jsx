import { useNavigate } from "react-router-dom";

const About = () => {
	const navigate = useNavigate();
	return (
		<div>
			<h1>About</h1>
			<button type="button" onClick={() => navigate(-1)}>
				GO BACK
			</button>
		</div>
	);
};

export default About;
