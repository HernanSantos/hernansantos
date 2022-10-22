import styled from "styled-components";


export const ContainerCard = styled.div`
    background-color: #1F232C;
    width: 25rem;
    height: 30rem;
    border-radius: 0.5rem;
    margin: 0.5rem;

    .infoContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 0.75rem 0.75rem 0.75rem;
        text-align: center;
        padding-left: 1rem;
        padding-right: 1rem;

        h1{
            margin: 0;
            font-size: 2.5rem;
            padding-bottom: 0.5rem;
        }
        .buttonContainer{
            width: 100%;
            display: flex;
            justify-content: space-evenly;
        }
        .paragraph{
            margin: 0.5rem;
        }
        .tecnologieContainer{
            width: 100%;
            margin: 0.25rem;
            display: flex;
            justify-content: space-evenly;
        }
        span{
            background-color: #F05454;
            border-radius: 0.25rem;
            padding: 0.25rem;
        }
    }
`;

export const Grid = styled.div`
    display: grid;
    height: 50%;
    grid-template-rows: 0.5fr 0.5fr;
    grid-template-areas: 
        "img1   img1"
        "img2   img3";
    grid-gap: 0.75rem;
    padding: 0.75rem;
`;

export const Img1 = styled.div`
    background-color: white;
    grid-area: ${({img})=> img};
    border-radius: 0.5rem;
`;

