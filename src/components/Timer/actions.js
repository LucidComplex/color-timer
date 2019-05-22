const START_TIMER = 'START_TIMER';
const STOP_TIMER = 'STOP_TIMER';

const startTimer = seconds => {
	const currentTime = new Date().getTime();
	return {
		type: START_TIMER,
		seconds,
		running: true,
		color: '#FF0000'
	};
};

const stopTimer = () => {
	return {
		type: STOP_TIMER,
		seconds: 0.7,
		running: false,
		color: '#00FF00'
	}
};

export { START_TIMER, STOP_TIMER, startTimer, stopTimer };
