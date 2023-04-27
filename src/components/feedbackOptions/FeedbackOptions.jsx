import { StyledButton, StyledList, StyledTitle } from "./FeedbackOptions.styled"
import PropTypes from 'prop-types';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div>
            <StyledTitle>Please leave feedback</StyledTitle>
            <StyledList>
                {options.map((option)=>{
                    return (
                        <li key={option}>
                            <StyledButton onClick={(event)=>{onLeaveFeedback(option)}}>{option}</StyledButton>
                        </li>
                    )
                })}
            </StyledList>
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}