import { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Passenger from "./Passenger";
import { TAB_TYPES } from "../utils/constants";

const NavigationTabs = () => {
	const [value, setValue] = useState("PASSENGER");
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<TabContext value={value}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<TabList
					centered
					// variant="fullWidth"
					onChange={handleChange}
					aria-label="tabs for different details"
				>
					<Tab label="Logins" value={TAB_TYPES.LOGIN} disabled />
					<Tab label="Passengers" value={TAB_TYPES.PASSENGER} />
					<Tab label="Journeys" value={TAB_TYPES.JOURNEY} disabled />
					<Tab label="Payments" value={TAB_TYPES.PAYMENT} disabled />
				</TabList>
			</Box>
			<TabPanel value={TAB_TYPES.LOGIN}>Login</TabPanel>
			<TabPanel value={TAB_TYPES.PASSENGER}>
				<Passenger />
			</TabPanel>
			<TabPanel value={TAB_TYPES.JOURNEY}>Journey</TabPanel>
			<TabPanel value={TAB_TYPES.PAYMENT}>Payment</TabPanel>
		</TabContext>
	);
};

export default NavigationTabs;
