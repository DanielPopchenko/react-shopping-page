import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Catalogue from "./pages/catalogue/Catalogue";
import Favourite from "./pages/favourite/Favourite";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/catalogue" element={<Catalogue />} />
				<Route path="/favourite" element={<Favourite />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
};

export default App;
