import styled from "styled-components";

export const FooterSection = styled.footer`
    width: 100%;
    height: 7rem;
    background-color: ${(props) => props.theme.primarybg};
    color: white;

    .container{
        display: flex;
        width: 90%;
        height: 100%;
        align-items: center;
        justify-content: space-between;
        margin: auto;
        font-size: 1.25rem;

        .logo{
            text-align: center;
            font-size: 1.25rem;
            font-weight: bold;
            color: #EFEFEF;
        }
        .contact{
            text-align: center;
            font-weight: bold;
            color: #EFEFEF;
            width: 12rem;
        }
        .linksContainer{
            display: flex;
            justify-content: space-evenly;
            padding-top: 0.5rem;
            color: #EFEFEF;
        }

        p{
            margin: 0;
        }

        @media screen and (max-width: 415px ){
            width: 100%;
            margin: auto;
            font-size: 1rem;

            .logo{
                font-size: 1.25rem;
            }
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
    }
`;