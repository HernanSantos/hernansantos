import { ContainerHome, TitleDiv, ImgDiv } from "../styledComponents/HomeStyle"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Home = () => {
  return (
    <ContainerHome id="home">
      <div className="infoContainer">
        <ImgDiv>
          <img src="http://res.cloudinary.com/dtfmesfi0/image/upload/v1666110677/pokemon-app/bibicfnwbdadiprw6veq.png" alt="" />
        </ImgDiv>
        <TitleDiv>
          <h2>Hola,</h2>
          <h1>Soy Hernán</h1>
          <h2>Frontend Developer</h2>
          <div className="iconsContainer">
            <a href="https://www.linkedin.com/in/hernan-santos-166161249/" target="_blank"><LinkedInIcon className="icon" sx={{fontSize:40, color:"#F05454"}}/></a>
            <a href="https://github.com/HernanSantos" target="_blank"><GitHubIcon className="icon" sx={{fontSize:40, color:"#F05454"}}/></a>
            <a href="https://wa.me/5491132990265" target="_blank"><WhatsAppIcon className="icon" sx={{fontSize:40, color:"#F05454"}}/></a>
          </div>
        </TitleDiv>
      </div>
    </ContainerHome>
  )
}
