import styled from "styled-components";

export const Wrapper = styled.div`
    width: 30rem;
    margin: auto;
    left: 50%;
    top: 50%;
    transform: translate(0%, 0%);
    margin-bottom: 4rem;

    img{
        display: block;
        width: 100%;
        height: auto;
        border-radius: 0.5rem;
        box-shadow: 0 1px 5px 1px black;
    }

    .content{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: #fff;
        text-transform: uppercase;
        font-size: 2rem;

        h1{
            margin: 0;
            font-size: 2.5rem;
            padding: 0.25rem;
        }
        p{
            margin: 0;
            padding: 0 1rem 0 1rem;
            font-size: 1rem;
            text-align: center;
        }
        .buttonContainer{
            width: 60%;
            height: 3rem;
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            .button{
                background-color: transparent;
                color: white;
                border: 2px solid white;
                border-radius: 0.5rem;
                width: 6rem;
                height: 2rem;
                transition: all .5s ease;
                cursor: pointer;

                &:hover{
                    width: 6.5rem;
                    height: 2.25rem;
                }
            }
        }
    }
    
    .overlay{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: 0.5 ease;
        background: #FF5412;
        border-radius: 0.5rem;
        cursor: default;
    }
    &:hover .overlay{
        opacity: 1;
    }

    @media screen and (max-width: 415px ){
        .content{
            
        }
    }
`;