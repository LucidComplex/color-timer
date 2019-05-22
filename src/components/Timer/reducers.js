import { START_TIMER, STOP_TIMER } from './actions';

const initialState = {
	running: false,
	startTime: null,
	seconds: 0,
	color: '#00FF00',
};

const timer = (state = initialState, action) => {
	switch(action.type) {
		case START_TIMER:
			return Object.assign({}, state, {
				seconds: action.seconds,
				running: action.running,
				color: action.color
			});
		case STOP_TIMER:
			return Object.assign({}, state, {
				seconds: action.seconds,
				running: action.running,
				color: action.color
			})
		default:
			return state;
	}
}

export default timer;
