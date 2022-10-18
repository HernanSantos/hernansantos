import styled from "styled-components";

export const ContainerAboutMe = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #30475E;

`;
export const InfoContainer = styled.div`
    width: 60%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
`;
export const TitleDiv = styled.div`
    width: 50%;
    height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const ImgDiv = styled(TitleDiv)`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 6rem;
    margin: 0;
    color: #F05454;
`;

export const Subtitle = styled.h2`
    font-size: 2.5rem;
    margin: 0;
    color: #F0ECE3;
`;
