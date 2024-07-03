import { Typography } from "@mui/material";
import NavigationTabs from "./components/NavigationTabs";

const App = () => {
	return (
		<>
			<Typography variant="h5" align="center" marginY={3}>
				IRCTC Autofill
			</Typography>
			<NavigationTabs />
		</>
	);
};

export default App;
