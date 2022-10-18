import { ContainerAboutMe,TitleDiv,Title,Subtitle,InfoContainer,ImgDiv } from "../styledComponents/AboutMeStyle"


export const AboutMe = () => {


  return (

    <ContainerAboutMe>
      <InfoContainer>
        <ImgDiv>
          <img src="http://res.cloudinary.com/dtfmesfi0/image/upload/v1666110677/pokemon-app/bibicfnwbdadiprw6veq.png" alt="" />
        </ImgDiv>
        <TitleDiv>
          <Subtitle>Hola</Subtitle>
          <Title>Soy Hernan</Title>
          <Subtitle>FrontEnd Developer</Subtitle>
        </TitleDiv>
      </InfoContainer>
      </ContainerAboutMe>
  )
}
