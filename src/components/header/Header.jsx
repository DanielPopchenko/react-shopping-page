import React from "react";
import styles from "./Header.module.css";
import logo from "../images/logo.png";

export const Header = () => {
	return (
		<header className={styles.header}>
			<a href="#!">
				<img src={logo} alt="logotype" width={236} height={60} />
			</a>

			<ul className={styles.linksList}>
				<li>CATALOGUE</li>
				<li>FASHION</li>
				<li>FAVOURITE</li>
				<li>LIFESTYLE</li>
			</ul>

			<button type="button">SIGN UP</button>
		</header>
	);
};
