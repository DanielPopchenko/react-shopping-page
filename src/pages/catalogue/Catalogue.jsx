import React from "react";
import { useNavigate } from "react-router-dom";
import { items } from "./items";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Catalogue = () => {
	const navigate = useNavigate();
	console.log(items);
	return (
		<div>
			<button type="button" onClick={() => navigate(-1)}>
				GO BACK
			</button>
			<h1>Catalogue</h1>

			<ul>
				{items.map((item) => (
					<li key={item.id}>
						<LazyLoadImage src={item.image} alt="" width={300} height={330} />
						<p>{item.name}</p>
						<span>{item.category}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Catalogue;
