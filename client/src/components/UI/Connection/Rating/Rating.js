import React from 'react';
import propTypes from 'prop-types';

import * as classes from './Rating.css';

const rating = (props) => {

	// Get a digit number from the decimal ratio.
	const rating = Math.round(props.rating * 100);

	// Determine the color to display based on the rating

	const hue = rating < 20 
		? 0
		: rating < 50
			? 40
			: rating < 60
				? 50
				: rating < 80
					? 55
					: 150;
	const color = `hsl(${hue}, 100%, 50%)`;

	// Set the classes based on props received
	const classList = [classes.Rating];
	if (props.big) classList.push(classes.Big);
	else if (props.small) classList.push(classes.Small);

	return (
		<div className={classList.join(' ')} style={{background: color}}>
			{rating}
		</div>
	)
}

rating.propTypes = {
	rating: propTypes.number,			// A decimal number representing the rating ratio
	big: propTypes.bool,				// If true a larger font-size is used
	small: propTypes.bool, 				// If true a smaller font-size is used.
}

export default rating;