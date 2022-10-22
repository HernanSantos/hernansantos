import styled from "styled-components";

export const Button = styled.button`
    background-color: ${({bg})=>bg || "blue"};
    border-radius: 0.5rem;
    color: #F0ECE3;
    width: 7rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-color: aliceblue;

    font-size: ${({size})=>{
        switch(size){
            case "sm":
                return "1.25rem";
            case "md":
                return "1.25rem";
            case "lg":
                return "2rem";
        }
    }     
    };
`;