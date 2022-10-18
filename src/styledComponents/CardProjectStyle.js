import styled from "styled-components";


export const ContainerCard = styled.div`
    background-color: #C7B198;
    width: 30rem;
    height: 15rem;
    border-radius: 1rem;
    text-align: center;
    font-size: 1.25rem;
    display: flex;
`;
export const ContainerImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    right: 4rem;
    width: 10rem;
`;

export const CardImg = styled.img`
    width: 14rem;
    height: 11rem;
    border-radius: 1rem;
    position: relative;
`;

export const CardBody = styled.div`
    width: 80%;
    margin: 0;
    height: 14rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    margin: 0;
    padding-bottom: 1rem;
`;

export const CardLinks = styled(CardBody)`
    flex-direction: row;
    justify-content: space-between;
`;

export const CardParagraph = styled.p`
    padding-bottom: 1rem;
    margin: 0;
`;

export const CardIcons = styled(CardLinks)`
    justify-content: space-evenly;
    padding-bottom: 1rem;
`;