import { Close, Save } from "@mui/icons-material";
import { Fab, Typography } from "@mui/material";
import React from "react";

type NewPassengerFormProps = {
	setIsPassengerList: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewPassengerForm: React.FC<NewPassengerFormProps> = ({
	setIsPassengerList,
}) => {
	const handleSavePassenger = () => {
		console.log("Save Passenger");
		setIsPassengerList(true);
	};

	const handleClose = () => {
		setIsPassengerList(true);
	};

	return (
		<>
			<Typography variant="h3" align="center">
				Display Form Here!
			</Typography>
			<Fab
				color="primary"
				aria-label="add"
				sx={{
					position: "fixed",
					bottom: (theme) => theme.spacing(3),
					right: (theme) => theme.spacing(12),
				}}
				onClick={() => handleSavePassenger()}
			>
				<Save />
			</Fab>
			<Fab
				color="error"
				aria-label="add"
				sx={{
					position: "fixed",
					bottom: (theme) => theme.spacing(3),
					right: (theme) => theme.spacing(3),
				}}
				onClick={() => handleClose()}
			>
				<Close />
			</Fab>
		</>
	);
};

export default NewPassengerForm;
