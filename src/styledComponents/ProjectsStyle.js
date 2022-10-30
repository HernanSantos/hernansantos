import styled from "styled-components";


export const ContainerProjects = styled.div`
    background-color: #EFEFEF;
    color: #373744;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100vh;
    font-family: 'Poppins', sans-serif;
    padding-top: 5rem;

    h1{
        margin: 0;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        font-size: 3.5rem;
    }
    .lineTitle{
        display: flex;
        justify-content: center;
        height: 5px;
        background-color: #0074B7;
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
        border: 0;
        width: 60%;
        flex-wrap: wrap;
        padding-top: 5rem;

        @media screen and (max-width: 415px ){
            width: 90%;
            justify-content: space-evenly;
        }
    }
    @media screen and (max-width: 415px ){
        height: 100%;
    }
`;
