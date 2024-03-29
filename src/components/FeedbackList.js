import React, { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
    const {feedback} = useContext(FeedbackContext);

    if(!feedback || feedback.length === 0) {
        return (
            <p>There is no feedback yet!</p>
        )
    }
    return (
        <div className="feedback-list">
            <AnimatePresence>            
                {feedback.map( item => (
                    <motion.div 
                        key={item.id}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{
                            opacity: 0,
                            transitionEnd: {
                                display: "none",
                            },
                        }}
                    >
                        <FeedbackItem 
                            key={item.id} 
                            item={item}
                        />
                    </motion.div>
                ))}            
            </AnimatePresence>
        </div>
    )
};

export default FeedbackList;