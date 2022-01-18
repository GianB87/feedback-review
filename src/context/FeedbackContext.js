import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([{
        id:1,
        text: 'This item is from context',
        rating: 10,
    },
    {
        id:2,
        text: 'This item is from context',
        rating: 10,
    },
    {
        id:3,
        text: 'This item is from context',
        rating: 6,
    },
])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })
    const deleteFeedback =(id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            // this filter all feedback list excluding the one with the id that is being removed
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
    }

    const updateFeedback = (id,updItem) => {
        setFeedback(feedback.map((item)=> (item.id===id ? {...item, ...updItem } : item)))
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }
    return (<FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        // this is a shorthand
    }}>

        {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext