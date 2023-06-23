import {v4 as uuidv4} from 'uuid';
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'Nice item, very fast service.',
            rating: 8
        },
        {
            id: 2,
            text: 'Everything was flawless.',
            rating: 10
        },
        {
            id: 3,
            text: 'The service was acceptable',
            rating: 5
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

    // update feedback item
    const updateFeedback = (id, updateItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? 
            {...item, ...updateItem} : item))
        )
        setFeedbackEdit({
            item: {},
            edit: false,
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;