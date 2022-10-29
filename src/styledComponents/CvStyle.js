import styled from "styled-components";

export const ContainerCv = styled.div`
    width: 100%;
    height: 25vh;
    color: #99A799;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Titulo = styled.h1`

`;

export const ButtonDiv = styled(ContainerCv)`
    height: 50%;
    justify-content: space-evenly;
`;

export const Button = styled.button`
    background-color: #F05454;
    color: #ECDBBA;
    border-color: #F05454;
    font-size: 1.5rem;
    cursor: pointer;
`;