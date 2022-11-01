import styled from "styled-components";

export const AboutMeContainer = styled.section`
    background-color: #EFEFEF;
    display: flex;
    justify-content: center;
    color: #373744;
    width: 100%;
    font-family: 'Poppins', sans-serif;

    .infoContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 80%;
        align-items: center;
        margin: auto;
        text-align: center;

        h1{
            font-size: 3rem;
            text-align: center;
            margin: 4rem 1rem 0 1rem;
        }
        .lineTitle{
            display: flex;
            justify-content: center;
            border: 0;
            height: 5px;
            background-color: #0074B7;
            width: 10%;
            margin: auto;
        }
        .imgTextDiv{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 60%;
            padding-top: 3rem;

            @media screen and (max-width: 415px ){
                width: 80%;
            }
            .imgContainer{
                width: 45%;

                img{
                    width: 250px;
                }
                .cv{
                    height: 5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 1rem;
                }
            }

            .textContainer{
                width: 45%;

                .personalData{
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    p{
                        margin: 0;
                        padding-top: 0.5rem;
                        padding-bottom: 0.5rem;
                        font-size: 1.25rem;
                    }
                }

                .hrStyle{
                    border: 0;
                    height: 1px;
                    background: #333;
                    background-image: -webkit-linear-gradient(left, #ccc, #333, #ccc);
                    background-image: -moz-linear-gradient(left, #ccc, #333, #ccc);
                }    

                p{
                    text-align: center;
                }
                
            }

        }

        .tecnologies{
            width: 60%;
            padding-bottom: 1rem;
            margin-top: 3rem;

            @media screen and (max-width: 415px ){
                width: 80%;

                .icon{
                    padding-bottom: 1rem;
                }
            }
            h2{
                font-size: 2rem;
                margin: 1rem 1rem 0 1rem;
            }
            .imagesContainer{
                width: 100%;
                display: flex;
                justify-content: space-around;
                padding-top: 3rem;
                flex-wrap: wrap;

                .icon{
                width: 6rem;
                }
            }
        }
    }
    @media screen and (max-width: 415px ){
        .infoContainer{
            
            .imgTextDiv{
                width: 90%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .imgContainer{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .textContainer{
                    padding-top: 2rem;
                    width: 100%;
                }
            }
            .lineTitle{
                width: 40%;
            }
        }
    }
`;