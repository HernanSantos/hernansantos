import styled from "styled-components";

export const ContainerHome = styled.section`
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.primarybg};

    .infoContainer{
        width: 60%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;

        @media screen and (max-width: 415px ) {
            width: 100%;
        }
    }
`;

export const TitleDiv = styled.div`
    width: 50%;
    height: 80vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
	transform: translatey(0px);
	animation: float 6s ease-in-out infinite;
        @keyframes float {
        0% {
            transform: translatey(0px);
        }
        50% {
            transform: translatey(-20px);
        }
        100% {
            transform: translatey(0px);
        }
        }

        h1{
            font-size: 6rem;
            margin: 0;
            color: #F05454;
            text-shadow: 0 0 0.5rem #121212;
        }

        h2{
            font-size: 2.5rem;
            margin: 0;
            color: #F0ECE3;
            text-shadow: 0 0 0.5rem #121212;
        }

    @media screen and (max-width: 415px ) {
            width: 90%;
    }

    .iconsContainer{
                width: 10rem;
                height: 50px;
                padding-top: 0.5rem;
                margin: 0;
                display: flex;
                align-items: flex-start;
                justify-content: space-between;

                .icon{
                    filter: drop-shadow( 2px 2px 2px rgba(0, 0, 0, .7));
                }
            }
            @media screen and (max-width: 415px ) {
                    width: 90%;
                    }

`;
export const ImgDiv = styled(TitleDiv)`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
        @media screen and (max-width: 415px ) {
            display: none;
        }
`;


