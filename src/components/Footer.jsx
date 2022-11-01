import {FooterSection} from "../styledComponents/FooterStyle"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export const Footer = () => {

  return (
    <FooterSection>
        <div className="container">
            <div className="logo">
                <p>HERNÁN SANTOS</p>
                <p>FrontEnd Developer</p>
            </div>
            <div className="contact">
                CONTACTO
                <div className="linksContainer">
                    <a href="https://www.linkedin.com/in/hernan-santos-166161249/" target="_blank"><LinkedInIcon sx={{fontSize:30, color:"white"}}/></a>
                    <a href="https://github.com/HernanSantos" target="_blank"><GitHubIcon sx={{fontSize:30, color:"white"}}/></a>
                    <a href="https://wa.me/5491132990265" target="_blank"><WhatsAppIcon sx={{fontSize:30, color:"white"}}/></a>
                </div>
            </div>
        </div>
        {/* <div className="copyright">
            Made by Hernán Santos
        </div> */}
    </FooterSection>
  )
}
