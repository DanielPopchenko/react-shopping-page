import { useState } from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 600,
	height: 300,
	bgcolor: "background.paper",
	// border: "2px solid #000",
	borderRadius: "7px",
	boxShadow: 24,
	p: 4,
};

export default function MyModal() {
	const [open, setOpen] = useState(false);
	const handleModalOpen = () => {
		setOpen((prev) => !prev);
	};

	return (
		<div>
			<button
				type="button"
				onClick={handleModalOpen}
				style={{ marginLeft: 50 }}
			>
				SIGN UP
			</button>

			<Modal
				open={open}
				onClose={handleModalOpen}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Text in a modal
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</Typography>
				</Box>
			</Modal>
		</div>
	);
}
