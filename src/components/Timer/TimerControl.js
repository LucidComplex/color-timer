import React from 'react';
import { connect } from 'react-redux';
import { startTimer, stopTimer } from './actions';
import IntervalManager from './IntervalManager';

import styles from './styles.css';


const TimerInput = props => {
	let firstInput = null;
	return (
		<div className={[styles.control, props.visible ? styles.controlVisible : styles.controlHidden].join(' ')}>
			<table className={styles.controlContainer}>
				<tbody>
					<tr>
						<td>
							<input
								type={"text"}
								value={props.minutes}
								className={[styles.input, styles.largerText].join(' ')}
								onFocus={event => event.target.select()}
								onChange={props.onMinutesChange}
								onKeyDown={props.onKeyDown}
								ref={ref => {
									firstInput = ref;
								}}
								autoFocus
							/>
						</td>
						<td className={[styles.centeredText, styles.largerText].join(' ')}>:</td>
						<td>
							<input
								type={"text"}
								value={props.seconds}
								className={[styles.input, styles.largerText].join(' ')}
								onFocus={event => event.target.select()}
								onChange={props.onSecondsChange}
								onKeyDown={event => {
									if (event.key === 'Tab') {
										firstInput.focus();
										event.preventDefault();
									} else {
										props.onKeyDown(event);
									}
								}}
							/>
						</td>
					</tr>
					<tr className={styles.labels}>
						<td>mins</td>
						<td>:</td>
						<td>secs</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

class TimerControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			minutesValue: '15',
			secondsValue: '00'
		};

		this.onSecondsChange = event => {
			let value = event.target.value;
			if (!value.match(/^\d*$/)) {
				return;
			}
			value = Number(value);
			if (value >= 60) {
				this.setState({
					secondsValue: 59
				});
			} else {
				this.setState({
					secondsValue: ('' + value).padStart(2, '0')
				});
			}
		}

		this.onMinutesChange = event => {
			let value = event.target.value;
			if (!value.match(/^\d*$/)) {
				return;
			}
			value = Number(value);
			if (value >= 60) {
				this.setState({
					minutesValue: 59
				});
			} else {
				this.setState({
					minutesValue: ('' + value).padStart(2, '0')
				});
			}
		}

		this.onKeyDown = event => {
			if (event.key === 'Enter') {
				const seconds = Number(this.state.minutesValue) * 60 + Number(this.state.secondsValue);
				this.props.startTimer(seconds);
				const start = Date.now();
				const intervalId = IntervalManager.setInterval(() => {
					const delta = Date.now() - start;
					if (delta / 1000 >= this.props.timer.seconds) {
						clearInterval(intervalId);
						alert('Time up!');
						this.props.stopTimer();
					}
				}, 1000);
			}
		}

	}


	render() {
		return (
			<TimerInput
				minutes={this.state.minutesValue}
				seconds={this.state.secondsValue}
				onMinutesChange={this.onMinutesChange}
				onSecondsChange={this.onSecondsChange}
				onKeyDown={this.onKeyDown}
				visible={this.props.visible}
			/>
		);
	}
}

const mapStateToProps = state => {
	return state;
};

const mapDispatchToProps = {
	startTimer,
	stopTimer
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerControl);
