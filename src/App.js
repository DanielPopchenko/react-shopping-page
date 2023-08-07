import React from "react";
import { Container } from "./components/container/Container";
import { Header } from "./components/header/Header";
import Hero from "./components/hero/Hero";

const App = () => {
	return (
		<>
			<Container>
				<Header />
				<Hero />
			</Container>
		</>
	);
};

export default App;
