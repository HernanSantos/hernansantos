import {Container} from "../styledComponents/NavbarStyle"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handlechange = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <Container>
      <h2>Logo</h2>
        <div className={`menuContainer ${isOpen ? "active" : "desactive" }`}>
          <a to="">Inicio</a>
          <a to="">Sobre mi</a>
          <a to="">Proyectos</a>
          <a to="">Contacto</a>
        </div>

        <div className="menuIcon" onClick={()=> handlechange()}>
          <MenuIcon/>
        </div>
        
        {/* <BgContainer className={`initial ${isOpen ? "active" :""}`}></BgContainer> */}
    </Container>
  )
}
