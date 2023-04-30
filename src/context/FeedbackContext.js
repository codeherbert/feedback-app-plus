import {v4 as uuidv4} from 'uuid';
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This is feedback item 2',
            rating: 8
        },
        {
            id: 3,
            text: 'This is feedback item 3',
            rating: 4
        }
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }

    // delete Feedback
    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you want to delete this item?")) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    };

    // set item to be edited
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        addFeedback,
        deleteFeedback,
        editFeedback,
        feedbackEdit,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;