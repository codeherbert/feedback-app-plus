import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This text is coming from Context',
            rating: 10
        }
    ]);

    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you want to delete this item?")) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    };

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;