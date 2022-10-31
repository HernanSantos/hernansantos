import styled from "styled-components";

export const FooterSection = styled.footer`
    width: 100%;
    height: 8rem;
    background-color: black;
    color: white;

    .container{
        display: flex;
        width: 70%;
        align-items: center;
        justify-content: space-between;
        margin: auto;
        font-size: 1.25rem;
        padding-top: 1rem;

        .contact{
            text-align: center;
            width: 15rem;
        }
        .linksContainer{
            display: flex;
            justify-content: space-evenly;
            padding-top: 1rem;
        }

        p{
            margin: 0;
        }
    }

    .copyright{
        text-align: center;
    }

    @media screen and (max-width: 415px ) {
        .container{
            width: 90%;

            .contact{
            width: 10rem;
        }
        }
        .copyright{
            padding-top: 0.5rem;
        }
    }
`;