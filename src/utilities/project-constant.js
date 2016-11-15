export const CORRECT = 1;
export const WRONG = 0;
export const SOURCE_URL = 'http://api.namegame.willowtreemobile.com';
export const INITIAL_PEOPLE=[
{
    "name": "Abby Cook-",
    "url": "http://willowtreeapps.com/wp-content/uploads/2015/11/headshot_abby_cook-1.jpg"
  },
  {
    "name": "Abdul Yusuf",
    "url": "http://willowtreeapps.com/wp-content/uploads/2016/08/headshot_abdul_yusuf.jpg"
  },
  {
    "name": "Adam Shea",
    "url": "http://willowtreeapps.com/wp-content/uploads/2016/10/headshot_adam_shea.jpg"
  },
  {
    "name": "Adrian Guevara",
    "url": "http://willowtreeapps.com/wp-content/uploads/2016/06/headshot_adrian_guevara.jpg"
  },
  {
    "name": "Alan Hill",
    "url": "http://willowtreeapps.com/wp-content/uploads/2016/09/headshot_alan_hill.jpg"
  }
];

export const INITIAL_STATE = {
	correctCount : 0,
	errorCount : 0,
	numberOfCandidate: 5,
	peopleIdx: [0,1,2,3,4],
	people: INITIAL_PEOPLE,
	correctPeopleIdx: 3,
	pdata : []
};