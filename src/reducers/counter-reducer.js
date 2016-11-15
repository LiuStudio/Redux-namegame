import {CORRECT, WRONG} from '../utilities/project-constant';

const counterReducer = (state={}, action)=>{
	switch(action.type){
		case 'INITIAL':
			return{
				... state,
				correctCount : 0,
				errorCount : 0
			}
		case 'INCREMENT':{
			    if (action.counterId === CORRECT){
			    	return {
			    		...state,
			    		correctCount : state.correctCount+1,
			    	}
			    }
			    else if(action.counterId === WRONG){
			    	return{
			    		...state,
			    		errorCount: state.errorCount+1
			    	}
			    }else{
			    	return state;
			    }
		}
		case 'CLEAR_ALL':{
			    return {
			    	... state,
			    	correctCount : 0,
					errorCount : 0
			    }
			    
		}
		case 'CLEAR':{
			    if (action.counterId === CORRECT){
			    	return {
			    		... state,
			    		correctCount : 0,
			    		errorCount
			    	}
			    }
			    else if(action.counterId === WRONG){
			    	return{
			    		... state,
			    		correctCount,
			    		errorCount: 0
			    	}
			    }else{
			    	return state;
			    }
		}
		default: return state;

	}
}

export default counterReducer;