import styled from "styled-components";


export const Toggler = styled.button`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    margin-right: 1.5rem;
    border: none;
    outline: none;
    cursor: pointer;
    color: white;

    &:hover{
        color: ${(props) => props.theme.title};
    }
`;

