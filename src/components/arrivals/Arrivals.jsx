import React from "react";
import styles from "./Arrivals.module.css";
import { FiArrowRight } from "react-icons/fi";
import girl1 from "../images/girl1.png";
import girl2 from "../images/girl2.png";
import girl3 from "../images/girl3.png";

const Arrivals = () => {
	return (
		<div className={styles.arrivals}>
			<div className={styles.arrivalsHeading}>
				<h2>NEW ARRIVALS</h2>
			</div>

			<ul className={styles.arrivalsList}>
				<li className={styles.arrivalsItem}>
					<img src={girl1} alt="" width={364} height={500} />
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
				<li className={styles.arrivalsItem}>
					<img src={girl2} alt="" width={364} height={500} />

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
				<li className={styles.arrivalsItem}>
					<img src={girl3} alt="" width={364} height={500} />
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

export default Arrivals;
