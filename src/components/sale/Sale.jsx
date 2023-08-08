import React from "react";
import styles from "./Sale.module.css";
import image from "../images/promo-img.png";

const Sale = () => {
	return (
		<div className={styles.sale}>
			<img src={image} alt="" />
			<div className={styles.textContainer}>
				<div className={styles.rectangle}>PAYDAY</div> <br />
				<h2>SALE NOW</h2>
				<p>
					Spend minimal $100 get 30% off voucher code for your next purchase
				</p>
				<h4>1 June - 10 June 2021</h4>
				<p style={{ fontWeight: "400" }}>*Terms & Conditions apply</p>
				<button type="button">SHOP NOW</button>
			</div>
		</div>
	);
};

export default Sale;
