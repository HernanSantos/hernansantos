import styled from "styled-components";


export const ContainerProjects = styled.section`
    background-color: ${(props) => props.theme.secondarybg};
    color: ${(props) => props.theme.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    padding-top: 5rem;

    h1{
        margin: 0;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        font-size: 3rem;
    }
    .lineTitle{
        display: flex;
        justify-content: center;
        height: 0.3rem;
        border: 0;
        background-color: ${(props) => props.theme.primarybg};
        width: 10%;
        margin: 0;

        @media screen and (max-width: 415px ){
            width: 40%;
        }
    }
    
    .projectsDiv{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 60%;
        flex-wrap: wrap;
        padding-top: 3rem;

        @media screen and (max-width: 415px ){
            width: 90%;
            justify-content: space-evenly;
        }
    }
`;
