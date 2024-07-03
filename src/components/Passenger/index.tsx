import { useState } from "react";
import PassengerList from "../PassengerList";
import NewPassengerForm from "../NewPassengerForm";

const Passenger = () => {
	const [isPassengerList, setIsPassengerList] = useState<boolean>(true);

	return isPassengerList ? (
		<PassengerList setIsPassengerList={setIsPassengerList} />
	) : (
		<NewPassengerForm setIsPassengerList={setIsPassengerList} />
	);
};

export default Passenger;
