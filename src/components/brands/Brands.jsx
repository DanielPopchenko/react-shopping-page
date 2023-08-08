import React from "react";
import styles from "./Brands.module.css";

import hmImg from "../images/brands-hm.png";
import lacosteImg from "../images/brands-lacoste.png";
import shopifyImg from "../images/brands-shopify.png";
import levisImg from "../images/brands-levis.png";
import obeyImg from "../images/brands-obey.png";
import amazonImg from "../images/brands-amazon.png";

const Brands = () => {
	return (
		<div className={styles.brands}>
			<img src={hmImg} alt="H&M logo" width={118} height={69} />
			<img src={obeyImg} alt="Obey logo" width={118} height={69} />
			<img src={shopifyImg} alt="Shopify logo" width={160} height={70} />
			<img src={lacosteImg} alt="Lacoste logo" width={150} height={70} />
			<img src={levisImg} alt="Levis logo" width={120} height={52} />
			<img
				src={amazonImg}
				alt="Amazon logo"
				width={160}
				height={52}
				style={{ marginTop: 19 }}
			/>
		</div>
	);
};

export default Brands;
