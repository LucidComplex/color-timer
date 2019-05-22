import React from 'react';

import styles from './styles.css';

const ColorBackground = props => {
	return (
		<div
			className={styles.background}
			style={{
				'transition': 'background-color ' + props.transitionDuration + 's linear',
				'backgroundColor': props.color
			}}
		>
		</div>
	);
};

export default ColorBackground;
