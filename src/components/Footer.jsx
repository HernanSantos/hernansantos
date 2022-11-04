import {FooterSection} from "../styledComponents/FooterStyle"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


export const Footer = () => {

  return (
    <FooterSection>
        <div className="container">
            <div className="logo">
                <p>HERNÁN SANTOS  -  Frontend Developer</p>
            </div>
            <div className="contact">
                CONTACTO
                <div className="linksContainer">
                    <a href="https://www.linkedin.com/in/hernan-santos-166161249/" target="_blank"><LinkedInIcon sx={{fontSize:40, color:"white"}} className="icon"/></a>
                    <a href="https://github.com/HernanSantos" target="_blank"><GitHubIcon sx={{fontSize:40, color:"white"}} className="icon"/></a>
                    <a href="mailto:xsantoshernan@gmail.com" target="_blank"><EmailIcon sx={{fontSize:40, color:"white"}} className="icon"/></a>
                </div>
            </div>
        </div>
    </FooterSection>
  )
}