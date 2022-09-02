import React from 'react';
import PropTypes from 'prop-types';

function FeedbackStats({feedback}) {
    // Calculate ratings average
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    // Fixed decimal to 1 place
    // Regex used to remove trailing 0 and decimal
    average = average.toFixed(1).replace(/[.,]0$/, '');

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            {/* Display 0 if NaN */}
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats;