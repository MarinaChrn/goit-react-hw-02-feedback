import { StyledButton, StyledList, StyledTitle } from "./FeedbackOptions.styled"

const onClickBtn =(event)=> {
    console.log(event.target.innerText)
};

export const FeedbackOptions = ({options}) => {
    return (
        <div>
            <StyledTitle>Please leave feedback</StyledTitle>
            <StyledList>
                {options.map((option)=>{
                    return (
                        <li key={option.length}>
                            <StyledButton onClick={onClickBtn}>{option}</StyledButton>
                        </li>
                    )
                })}
            </StyledList>
        </div>
    )
}