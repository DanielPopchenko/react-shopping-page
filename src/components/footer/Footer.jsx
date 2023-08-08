import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.socials}>
				<h2>FASHION</h2>

				<p>
					Complete your style with awesome <br /> clothes from us.
				</p>

				<ul className={styles.socialsList}>
					<li className={styles.facebook}></li>
					<li className={styles.inst}></li>
					<li className={styles.twitter}></li>
					<li className={styles.linkedin}></li>
				</ul>
			</div>

			<div className={styles.info}>
				<div className={styles.listContainer}>
					<h3 className={styles.listHeading}>Company</h3>
					<ul className={styles.companyList}>
						<li className={styles.companyItem}>About</li>
						<li className={styles.companyItem}>Contact us</li>
						<li className={styles.companyItem}>Support</li>
						<li className={styles.companyItem}>Careers</li>
					</ul>
				</div>
				<div className={styles.listContainer}>
					<h3 className={styles.listHeading}>Quick Link</h3>
					<ul className={styles.quickLinkList}>
						<li className={styles.quickLinkItem}>Share Location</li>
						<li className={styles.quickLinkItem}>Orders Tracking</li>
						<li className={styles.quickLinkItem}>Size Guide</li>
						<li className={styles.quickLinkItem}>FAQs</li>
					</ul>
				</div>
				<div className={styles.listContainer}>
					<h3 className={styles.listHeading}>Legal</h3>
					<ul className={styles.legalList}>
						<li className={styles.legalItem}>Terms & conditions</li>
						<li className={styles.legalItem}>Privacy Policy</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
