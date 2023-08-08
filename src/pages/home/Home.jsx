import React from "react";

import Arrivals from "../../components/arrivals/Arrivals";
import Brands from "../../components/brands/Brands";
import { Container } from "../../components/container/Container";
import { Header } from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Sale from "../../components/sale/Sale";
import Youngs from "../../components/youngs/Youngs";
import Vouchers from "../../components/vouchers/Vouchers";
import JoinForm from "../../components/join-form/JoinForm";
import Footer from "../../components/footer/Footer";

const Home = () => {
	return (
		<>
			<Container>
				<Header />
				<Hero />
			</Container>
			<Brands />
			<Container>
				<Arrivals />
			</Container>
			<Sale />

			<Container>
				<Youngs />
				<Vouchers />
			</Container>

			<JoinForm />

			<Footer />
		</>
	);
};

export default Home;
