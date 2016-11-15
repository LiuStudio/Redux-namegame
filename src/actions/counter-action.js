export const incrementCounter = (counterId)=>{
	return{
		type: 'INCREMENT',
		counterId
	}
};

export const clearCounter = (counterId)=>{
	return{
		type: 'CLEAR',
		counterId
	}
};


export const clearAllCounter = ()=>{
	return{
		type: 'CLEAR_ALL'
	}
};