import { GENDER, BIRTH_PREF } from "./constants";
import { PassengerType } from "./types";

const list: PassengerType[] = [
	{
		id: Math.random().toString(36).substr(2, 9),
		name: "Prateek Budhiraja",
		age: 25,
		gender: GENDER.MALE,
		birth_pref: BIRTH_PREF.UB,
		nationality: "Indian",
	},
	{
		id: Math.random().toString(36).substr(2, 9),
		name: "Agnel",
		age: 28,
		gender: GENDER.MALE,
		birth_pref: BIRTH_PREF.MB,
		nationality: "Indian",
	},
	{
		id: Math.random().toString(36).substr(2, 9),
		name: "Ritesh",
		age: 25,
		gender: GENDER.MALE,
		birth_pref: BIRTH_PREF.UB,
		nationality: "Indian",
	},
	{
		id: Math.random().toString(36).substr(2, 9),
		name: "Hrishikesh",
		age: 25,
		gender: GENDER.MALE,
		birth_pref: BIRTH_PREF.LB,
		nationality: "Indian",
	},
	{
		id: Math.random().toString(36).substr(2, 9),
		name: "Saurabh",
		age: 12,
		gender: GENDER.FEMALE,
		birth_pref: BIRTH_PREF.SL,
		nationality: "Indian",
	},
];

const getPassengerList = async (): Promise<PassengerType[]> => {
	return Promise.resolve(list);
};

const addPassenger = (passenger: PassengerType): void => {
	list.push(passenger);
};

const deletePassenger = (id: string): Promise<Boolean> => {
	const index = list.findIndex((passenger) => passenger.id === id);
	list.splice(index, 1);
	return Promise.resolve(true);
};

export { getPassengerList, addPassenger, deletePassenger };
