import { ContainerHome,TitleDiv,Title,Subtitle,InfoContainer,ImgDiv,IconsDiv } from "../styledComponents/HomeStyle"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    <ContainerHome id="home">
      <Navbar/>a
      <InfoContainer>
        <ImgDiv>
          <img src="http://res.cloudinary.com/dtfmesfi0/image/upload/v1666110677/pokemon-app/bibicfnwbdadiprw6veq.png" alt="" />
        </ImgDiv>
        <TitleDiv>
          <Subtitle>Hola,</Subtitle>
          <Title>Soy Hernán</Title>
          <Subtitle>FrontEnd Developer</Subtitle>
          <IconsDiv>
            <a href="https://www.linkedin.com/in/hernan-santos-166161249/" target="_blank"><LinkedInIcon sx={{fontSize:40, color:"#F05454"}}/></a>
            <a href="https://github.com/HernanSantos" target="_blank"><GitHubIcon sx={{fontSize:40, color:"#F05454"}}/></a>
            <a href="https://wa.me/5491132990265" target="_blank"><WhatsAppIcon sx={{fontSize:40, color:"#F05454"}}/></a>
          </IconsDiv>
        </TitleDiv>
      </InfoContainer>
      </ContainerHome>
  )
}
