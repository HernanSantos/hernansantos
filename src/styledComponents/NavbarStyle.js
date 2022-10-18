import styled from "styled-components";


export const Container = styled.div`
    background-color: #F05454;
    color: #F0ECE3;
    width: 100%;
    height: 4.5rem;
    display: flex;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
`;
export const DivMenu = styled.div`
    display: flex;
    width: 35%;
    justify-content: flex-end;
`;

export const UlMenu = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 2rem;
`;

export const Navigation = styled.a`
    cursor: pointer;

        &:hover{
            color: #ADC2A9;
        }
`;

export const Logo = styled(UlMenu)`
    justify-content: flex-start;
    padding-left: 1rem;
`;