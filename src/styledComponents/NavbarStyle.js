import styled from "styled-components";


export const Container = styled.div`
    background-color: #16213E;
    color: #F0ECE3;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    font-family: 'Open Sans', sans-serif;
    margin: auto;
    width: 100%;
    height: 5rem;

    a{
        font-size: 2rem;
        text-decoration: none;
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
            background-color: #16213E;
            position: absolute;
            top: 5rem;
            left: -100%;
            width: 100%;
            height: calc(100vh - 5rem);
            justify-content: center;
            flex-direction: column;
            align-items: center;
            transition: all 0.5s ease;
            z-index: 1;
        }
        &.active{
            left: 0;
        }
        &.desactive{
            left: -100%;
        }
    }
/* 
    .menuContainer.active{
        display: flex;
    }

    .menuContainer.desactive{
        display: none;
    } */

    /* .menuContainer.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        right: 0;
        text-align: center;
    } */

    .menuIcon{
        display: none;
        width: 3rem;
        padding-left: 1rem;

        @media screen and (max-width: 415px ) {
            display: block;
            align-items: center;
        }
    }
`;

// export const BgContainer = styled.div`
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     top: -1000px;
//     z-index: 0;
//     transition: all .5s ease;

//         &.active{
//             width: 100%;
//             height: 100vh;
//             top: 0;
//             left: 0;
//         }
// `;

// export const DivMenu = styled.div`
//     display: flex;
//     width: 50%;
//     justify-content: flex-end;

//         @media screen and (max-width: 415px ) {
//             width: 100% ;
//             position: absolute;
//             margin-left: auto;
//             margin-right: auto;
//             text-align: center;
//         }  
// `;


// export const UlMenu = styled.ul`
//     display: flex;
//     justify-content: space-around;
//     width: 100%;
//     padding: 0;
//     margin: 0;
//     list-style: none;
//     font-size: 1.5rem;

//         @media screen and (max-width: 415px ) {
//         }
//     `;

// export const LiMenu = styled.li`
//     text-decoration: none;
//     padding-right: 3rem;
//     position: relative;
// `;

// export const Navigation = styled.a`
//     cursor: pointer;

//         &:hover{
//             color: #F05454;
//         }
//         &:hover::after{
//             width: 75%;
//         }
//         &::after{
//             content: "";
//             position: absolute;
//             display: block;
//             height: 0.5rem;
//             width: 0%;
//             background-color: #F05454;
//             bottom: -0.5rem;
//             transition: all ease-in-out 250ms;
//         }
// `;
