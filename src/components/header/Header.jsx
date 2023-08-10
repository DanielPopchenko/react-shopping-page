import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../images/logo.png";
import { routes } from "../../links";

import MyModal from "../signup-modal/MyModal";

export const Header = () => {
	return (
		<header className={styles.header}>
			<a href="#!">
				<img src={logo} alt="logotype" width={200} height={50} />
			</a>

			<ul className={styles.linksList}>
				{routes.map((route) => (
					<li key={route.path} className={styles.link}>
						<Link to={route.path}>{route.title}</Link>
					</li>
				))}
			</ul>

			{/* <button type="button">SIGN UP</button> */}

			<MyModal />
		</header>
	);
};
