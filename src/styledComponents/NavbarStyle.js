import styled from "styled-components";

export const Container = styled.nav`
    background-color: #0074B7;
    color:  #EFEFEF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    width: 100%;
    height: 4.5rem;
    opacity: 1;
    position: fixed;
    z-index: 2;
    box-shadow: 0px 3px 18px #0074B7;

    a{
        font-size: 1.5rem;
        text-decoration: none;
        font-weight: 500;
        color: #EFEFEF;

        &:hover{
           color: #F05454;
           text-decoration: underline #F05454;
           
        }
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
                margin-right: 2.5rem;

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
            background-color: #0074B7;
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
            padding-right: 0.75rem;
        }
    }
`;
