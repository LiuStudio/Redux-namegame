import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {clearAllCounter} from '../actions/counter-action';
import Counters from '../components/counters';
import PeopleName from '../components/people-name';
import Candidates from '../components/candidates';
import {candidateOnClick} from '../actions/name-game-action';
import { initialState, fetchData } from '../actions/config-action';


const mapStateToProps = (state) => {
  const {numberOfCandidate, peopleIdx, people, correctPeopleIdx} = state.nameGameReducer;
  const pdata = state.nameGameReducer.pdata;
  const { correctCount, errorCount} = state.counterReducer;
  return {
    correctCount,
    errorCount,
    numberOfCandidate,
    peopleIdx,
    people,
    correctPeopleIdx,
    pdata
  };
};

const mapDispatchToProps = (dispatch) => {
	return{
		initialState: ()=> {
			dispatch(initialState());
		},
		fetchData: () => {
			dispatch(fetchData());
		},
		clearAllCounter: () => {
			dispatch(clearAllCounter());
		},
		candidateOnClick: (candidateName)=> {
			dispatch(candidateOnClick(candidateName));
		}
	};
};

class NameGame extends React.Component{
	constructor(props){
		super(props);
		
	};

	static propTypes = {
		correctCount: PropTypes.number,
		errorCount : PropTypes.number,
		numberOfCandidate: PropTypes.number,
		peopleIdx: PropTypes.arrayOf(PropTypes.number),
		people: PropTypes.arrayOf(PropTypes.object),
		correctPeopleIdx: PropTypes.number,
		pdata:PropTypes.arrayOf(PropTypes.object),
		clearAllCounter: PropTypes.func,
		candidateOnClick: PropTypes.func,
		fetchData:PropTypes.func,
		initialState: PropTypes.func
	};	

	componentWillMount(){
		this.props.initialState();
		this.props.fetchData();

	};

	componentWillReceiveProps(nextProps) {

  	};

 	render() {
 		const{
 			correctCount,
 			errorCount,
 			numberOfCandidate,
 			peopleIdx,
 			people,
 			correctPeopleIdx,
 			pdata,
			clearAllCounter,
			candidateOnClick
 			} = this.props;
 	   return(
			<div className = "container">
				<Counters correctCount = {correctCount} 
						  errorCount={errorCount}
				/>
				<button className="btn btn-info btn-lg" 
						onClick={clearAllCounter}
						> 
				Do IT AGAIN!
				</button>
				<PeopleName name={(people) ? people[correctPeopleIdx].name : "TOM"}/>
				<Candidates candidateList = {people} 
							onClick={candidateOnClick}
				/>
			</div>
		);
 	  }
};

export default connect(mapStateToProps,mapDispatchToProps)(NameGame);

