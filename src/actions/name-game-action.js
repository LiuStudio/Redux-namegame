import {CORRECT, WRONG} from '../utilities/project-constant';
import {incrementCounter, clearCounter, clearAllCounter} from '../actions/counter-action';
import {randomSelectIdxGen, selectCorrectPeople, selectPeopleGroup, findPeople} from '../utilities/name-game-utilities';



export const reAssignCandidate = (peopleIdx,people,correctPeopleIdx) =>{
	return{
		type: 'RE_ASSIGN_CANDIDATE',
		peopleIdx,
		people,
		correctPeopleIdx
	};
};

export const candidateOnClick = (candidateName)=>{
	return (dispatch, getState) => {
		if (candidateName === getState().nameGameReducer.people[getState().nameGameReducer.correctPeopleIdx].name){
			dispatch(incrementCounter(CORRECT));
			const selectedPeopleGroupArr = selectPeopleGroup(getState().nameGameReducer.numberOfCandidate, getState().nameGameReducer.pdata.length);
			const peopleArr = findPeople(selectedPeopleGroupArr,getState().nameGameReducer.pdata);
			const correctPeopleIdxData = selectCorrectPeople(getState().nameGameReducer.numberOfCandidate);
			dispatch(reAssignCandidate(selectedPeopleGroupArr,peopleArr,correctPeopleIdxData));
		}else{
			dispatch(incrementCounter(WRONG));
		}
	}
};
