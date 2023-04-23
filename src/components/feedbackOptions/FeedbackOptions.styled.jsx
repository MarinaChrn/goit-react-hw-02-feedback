import styled from 'styled-components';

export const StyledList = styled.ul`
    list-style:none;
    display:flex;
    gap: 15px;
`;

export const StyledTitle = styled.h2`
    font-weight: 600;
    margin-top:10px;
    margin-bottom:25px;
    margin-left: 40px;
`

export const StyledButton = styled.button`
    padding: 8px 10px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.38);
    background-color: #fff;
    cursor: pointer;
    &:hover, &:focus {
        background-color: #7fbdef;
    }
`