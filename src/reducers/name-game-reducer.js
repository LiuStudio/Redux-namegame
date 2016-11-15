import {INITIAL_STATE} from '../utilities/project-constant';

const nameGameReducer = (state={}, action)=>{
	switch(action.type){
		case 'INITIAL':
			return{
				... INITIAL_STATE
			}
		case 'LOAD_DATA':
			return{
				... state,
				pdata: action.data
			}
		case 'RE_ASSIGN_CANDIDATE':
			return{
				... state,
				peopleIdx: action.peopleIdx,
				people   : action.people,
				correctPeopleIdx: action.correctPeopleIdx
			}
		default: return state;
		
	}
};

export default nameGameReducer;
