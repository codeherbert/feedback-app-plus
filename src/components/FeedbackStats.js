import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext);

    // Calculate ratings average
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    // Fixed decimal to 1 place
    // Regex used to remove trailing 0 and decimal
    average = average.toFixed(1).replace(/[.,]0$/, '');

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} {feedback.length === 1 ? "Review" : "Reviews"}</h4>
            {/* Display 0 if NaN */}
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

export default FeedbackStats;