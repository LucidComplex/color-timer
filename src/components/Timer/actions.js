const START_TIMER = 'START_TIMER';
function startTimer(seconds) {
	return {
		type: START_TIMER,
		seconds,
		running: true
	};
}

export startTimer;
