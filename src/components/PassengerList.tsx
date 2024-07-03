import React, { useEffect, useState } from "react";
import {
	Button,
	Fab,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { deletePassenger, getPassengerList } from "../utils/passengerDB";
import { PassengerType } from "../utils/types";

type PassengerListProps = {
	setIsPassengerList: React.Dispatch<React.SetStateAction<boolean>>;
};

const PassengerList: React.FC<PassengerListProps> = ({
	setIsPassengerList,
}) => {
	const [passengers, setPassengers] = useState<PassengerType[]>([]);

	useEffect(() => {
		async function fetchData() {
			let passengers = await getPassengerList();
			setPassengers(passengers);
		}

		fetchData();
	}, []);

	const handleDelete = async (id: string) => {
		const status = await deletePassenger(id);
		if (status) {
			setPassengers((prevPassengers) =>
				prevPassengers.filter((passenger) => passenger.id !== id)
			);
		}
	};

	const handleAddPassenger = () => {
		setIsPassengerList(false);
	};

	if (passengers.length === 0) {
		return (
			<>
				<Typography variant="h6" align="center">
					No Passengers Found!
				</Typography>
				<Button
					variant="contained"
					color="primary"
					onClick={() => handleAddPassenger()}
					sx={{ display: "block", margin: "auto", marginTop: 2 }}
				>
					Add Passenger
				</Button>
			</>
		);
	}

	return (
		<>
			<List sx={{ width: "100%" }}>
				{passengers.map((passenger) => (
					<ListItem alignItems="flex-start" dense>
						<ListItemText
							primary={`${passenger.name}, (${
								passenger.age
							}${passenger.gender.slice(0, 1)}) `}
							secondary={
								<>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										{passenger.birth_pref}, {passenger.nationality}
									</Typography>
								</>
							}
						/>
						<IconButton aria-label="edit" color="primary">
							<EditIcon />
						</IconButton>
						<IconButton
							aria-label="delete"
							color="error"
							onClick={() => handleDelete(passenger.id)}
						>
							<DeleteIcon />
						</IconButton>
					</ListItem>
				))}
			</List>
			<Fab
				color="primary"
				aria-label="add"
				sx={{
					position: "fixed",
					bottom: (theme) => theme.spacing(3),
					right: (theme) => theme.spacing(3),
				}}
				onClick={() => handleAddPassenger()}
			>
				<AddIcon />
			</Fab>
		</>
	);
};

export default PassengerList;
