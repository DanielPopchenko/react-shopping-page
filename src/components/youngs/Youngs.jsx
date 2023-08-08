import React from "react";
import styles from "./Youngs.module.css";
import girl from "../images/young-girl.png";
import girls from "../images/young-girls.png";
import { FiArrowRight } from "react-icons/fi";

const Youngs = () => {
	return (
		<div>
			<div className={styles.youngsHeading}>
				<h2>Young`s Favourite</h2>
			</div>

			<ul className={styles.youngsList}>
				<li className={styles.youngsItem}>
					<img src={girls} alt="" width={620} height={400} />
					<div className={styles.textGroup}>
						<div className="">
							<h3>Hoodies & Sweetshirt</h3>
							<p>Explore Now!</p>
						</div>
						<div className="">
							<FiArrowRight fontSize={24} cursor="pointer" />
						</div>
					</div>
				</li>
				<li className={styles.youngsItem}>
					<img src={girl} alt="" width={620} height={400} />
					<div className={styles.textGroup}>
						<div className="">
							<h3>Hoodies & Sweetshirt</h3>
							<p>Explore Now!</p>
						</div>
						<div className="">
							<FiArrowRight fontSize={24} cursor="pointer" />
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Youngs;
