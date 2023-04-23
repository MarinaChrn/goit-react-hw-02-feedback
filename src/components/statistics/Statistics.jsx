import { StyledList, StyledTitle } from "./Statistics.styled"
import PropTypes from 'prop-types';

export const Statistics = ({good, neutral, bad, total, positivePercentage})=> {
    return (
        <div>
            <StyledTitle>Stastics</StyledTitle>
            <StyledList>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive feedback: {positivePercentage}%</li>
            </StyledList>
        </div> 
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}