import React from "react";
import styles from "./Vouchers.module.css";
import image from "../images/vouchers-img.png";
import appStore from "../images/app-store.png";
import googlePlay from "../images/google-play.png";

const Vouchers = () => {
	return (
		<div className={styles.vouchers}>
			<div className={styles.textGroup}>
				<h3>
					DOWNLOAD APP & <br /> GET THE VOUCHER!
				</h3>
				<p>
					Get 30% off for first transaction using <br /> Rondovision mobile app
					for now.
				</p>

				<div className="">
					<img src={appStore} alt="App store logo" width={150} height={50} />
					<img
						src={googlePlay}
						alt="Google play logo"
						width={150}
						height={50}
					/>
				</div>
			</div>

			<img src={image} alt="" width={600} height={750} />
		</div>
	);
};

export default Vouchers;
