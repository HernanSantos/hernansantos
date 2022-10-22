import { ContainerHome,TitleDiv,Title,Subtitle,InfoContainer,ImgDiv,IconsDiv } from "../styledComponents/HomeStyle"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export const Home = () => {
  return (
    <ContainerHome>
      <InfoContainer>
        <ImgDiv>
          <img src="http://res.cloudinary.com/dtfmesfi0/image/upload/v1666110677/pokemon-app/bibicfnwbdadiprw6veq.png" alt="" />
        </ImgDiv>
        <TitleDiv>
          <Subtitle>Hola,</Subtitle>
          <Title>Soy Hernán</Title>
          <Subtitle>FrontEnd Developer</Subtitle>
          <IconsDiv>
            <span><LinkedInIcon sx={{fontSize:40, color:"#F05454"}}/></span>
            <span><GitHubIcon sx={{fontSize:40, color:"#F05454"}}/></span>
            <span><EmailIcon sx={{fontSize:40, color:"#F05454"}}/></span>
          </IconsDiv>
        </TitleDiv>
      </InfoContainer>
      </ContainerHome>
  )
}
