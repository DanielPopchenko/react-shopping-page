import React from "react";
import styles from "./Hero.module.css";
import image from "../images/hero-img.png";
import element from "../images/element.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.hero}>
			<div className={styles.textContainer}>
				<div className={styles.rectangle}>LET`S</div>
				<h2 className={styles.heroHeading}>EXPLORE</h2>
				<div className={styles.yellowRectangle}>UNIQUE</div>
				<h2 className={styles.heroHeading}>CLOTHES.</h2>
				<p>Live for Influential and Innovative fashion!</p>
				<div className={styles.buttonGroup}>
					<img src={element} alt="" width={150} heigth={30} />
					<button type="button" onClick={() => navigate("/catalogue")}>
						SHOP NOW
					</button>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<img src={image} alt="girl" width={681} height={614} />
			</div>
		</div>
	);
};

export default Hero;
