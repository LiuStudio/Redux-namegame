import fetch from 'isomorphic-fetch';
import {SOURCE_URL, INITIAL_STATE} from '../utilities/project-constant';

export const loadData = (data)=>{
	return{
		type: 'LOAD_DATA',
		data: data
		
	}
};

export const initialState = ()=>{
	return{
		type: 'INITIAL'
		
	}
};


export const fetchData = ()=>{
  return (dispatch) => {
	fetch(SOURCE_URL)
		.then((response) =>{
        	if (response.status >= 400) {
            	throw new Error("Bad response from server");
        	}
    		return response.json();
		})
		.then((data) => {
      		dispatch(loadData(data));
		});

  }
	
};