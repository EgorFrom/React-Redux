export const select = (car) => {
	alert("weight: " + car.weight);
	return {
		type: "CAR_SELECTED",
		payload: car
	}
};