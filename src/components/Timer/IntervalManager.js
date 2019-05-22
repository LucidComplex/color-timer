class IntervalManager {
	static setInterval(func, interval) {
		clearInterval(this.intervalId);
		this.intervalId = setInterval(func, interval);
		return this.intervalId;
	}

	static clearInterval() {
		clearInterval(this.intervalId);
	}
}

export default IntervalManager;
