import styled from "styled-components";


export const ContainerProjects = styled.div`
    background-color: #EFEFEF;
    color: #373744;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
            border: 0;
            height: 5px;
            background-color: #0074B7;
            width: 9rem;
            margin: auto;
    }
    
    .projectsDiv{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 60%;
        flex-wrap: wrap;
        padding-top: 3rem;

        @media screen and (max-width: 415px ){
            width: 100%;
            justify-content: space-evenly;
        }
    }
`;
