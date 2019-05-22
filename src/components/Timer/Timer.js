import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';

import ColorBackground from './ColorBackground';
import TimerControl from './TimerControl';
import { stopTimer } from './actions';
import IntervalManager from './IntervalManager';

class Timer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		document.addEventListener('keydown', event => {
			if (event.key === 'Escape') {
				this.props.stopTimer();
				IntervalManager.clearInterval();
			}
		});
	}

	render() {
		return (
			<>
				<ColorBackground
					color={this.props.timer.color}
					transitionDuration={this.props.timer.seconds}
				/>
				<TimerControl
					visible={!this.props.timer.running}
				/>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		timer: state.timer
	};
};

const mapDispatchToProps = {
	stopTimer
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
