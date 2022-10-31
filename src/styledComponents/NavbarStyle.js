import styled from "styled-components";

export const Container = styled.nav`
    background-color: #EFEFEF;
    color:  #373744;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Poppins', sans-serif;
    margin: auto;
    width: 100%;
    height: 3.5rem;
    opacity: 1;
    position: fixed;
    z-index: 2;
    box-shadow: 0px 3px 18px grey;

    a{
        font-size: 1.5rem;
        text-decoration: none;
        font-weight: bold;
        color: #373744;

        &:hover{
           color: #FF5412;
           border-bottom: 4px solid #FF5412;
           
        }
    }
    h2{
        width: 5rem;
        padding-left: 1rem;
    }
    .menuContainer{
        display: flex;
        align-items: center;
        justify-content: space-between;

            a{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                cursor: pointer;
                transition: all 0.5s ease;
                margin-right: 3rem;

                @media screen and (max-width: 415px ){
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    height: 100px;
                }
            }

        @media screen and (max-width: 415px ) {
            display: flex;
            background-color: #EFEFEF;
            position: absolute;
            top: 3rem;
            left: -100%;
            width: 100%;
            height: calc(100vh - 3rem);
            justify-content: center;
            flex-direction: column;
            align-items: center;
            transition: all 0.5s ease;
            z-index: 1;

            a{
                margin: 0;
            }
        }
        &.active{
            left: 0;
            
        }
        &.desactive{
            left: -100%;
        }
    }

    .menuIcon{
        display: none;
        width: 4rem;

        @media screen and (max-width: 415px ) {
            display: block;
            align-items: center;
        }
    }
`;
