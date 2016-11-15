
export const randomSelectIdxGen = (n, max) => {
		let idxArr=[];
		let i = 0;
		while(i<n){
			let curpick = Math.floor(Math.random()*max);
			if (idxArr.indexOf(curpick) === -1){
				idxArr.push(curpick);
				i++;
			}
		}
		return idxArr;
	};

export const selectCorrectPeople = (numberOfCandidate) => {
		return Math.floor(Math.random()*numberOfCandidate);
	};
	
export const selectPeopleGroup = (numberOfCandidate, dataSize) => {
		return randomSelectIdxGen(numberOfCandidate, dataSize);
	};
	
export const findPeople = (idxArr, Arr) => {
		const selectedPeople = idxArr.map(x => Arr[x]);
		return selectedPeople;
	};

export const findPeopleName = (selectedPeople) => {
		const peopleName = selectedPeople.map(x => x.name);
		return peopleName;
	};

export const findPeopleImg = (selectedPeople) => {
		const peopleImg = selectedPeople.map(x => x.url);
		return peopleImg;
	};
