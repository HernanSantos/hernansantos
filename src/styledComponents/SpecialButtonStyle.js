
import styled from "styled-components";

export const SpecialButton = styled.button`
    width: ${({wsize})=>{
        switch(wsize){
            case "sm":
                return "6rem";
            case "md":
                return "8rem";
            case "lg":
                return "10rem";
        }
    }
    };
    padding: 0.3rem 0.3rem;
    border: unset;
    border-radius: 0.2rem;
    color: ${({color})=>color || "#212121"};
    z-index: 1;
    background: ${({bg})=>bg || "#F0ECE3"};
    position: relative;
    font-weight: 1000;
    font-size: 17px;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
    box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
    transition: all 250ms;
    overflow: hidden;
    font-family: 'Poppins', sans-serif;

    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        border-radius: 0.2rem;
        background-color: #0074B7;
        z-index: -1;
        -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        transition: all 500ms
    }

    &:hover::before{
        width: 100%;
    }

    &:hover{
        color: #F0ECE3;
    }
`;