import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
	const navigate = useNavigate();
	return (
		<div
			style={{
				textAlign: "center",
				display: "block",
				marginLeft: "auto",
				marginRight: "auto",
			}}
		>
			<h1 style={{ fontSize: 50, textAlign: "center", marginTop: "20%" }}>
				Error! <br /> Oooops, seems like you are nowhere, try to go back on page
			</h1>

			<button
				style={{ display: "block", marginLeft: "46%", marginTop: 100 }}
				onClick={() => navigate(-1)}
			>
				GO BACK
			</button>
		</div>
	);
};

export default Error;
