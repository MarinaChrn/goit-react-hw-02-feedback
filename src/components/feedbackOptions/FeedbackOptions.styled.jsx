import styled from 'styled-components';

export const StyledList = styled.ul`
    list-style:none;
    display:flex;
    gap: 15px;
`;

export const StyledTitle = styled.h2`
    font-weight: 400;
    margin-top:10px;
    margin-bttom:25px;
    margin-left: 40px;
`

export const StyledButton = styled.button`
    padding: 8px 10px;
    font-size: 18px;
    &:hover, &:focus {
        background-color: #7fbdef;
    }
`