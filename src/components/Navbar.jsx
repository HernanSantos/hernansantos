import React from 'react';
import {Container} from "../styledComponents/NavbarStyle"
import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { HashLink as Link} from "react-router-hash-link";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Toggler } from '../styledComponents/ToggleSwitchStyle';



export const Navbar = ({themeToggler, theme}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handlechange = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <Container>
        <div className={`menuContainer ${isOpen ? "active" : "desactive" }`}>
            <Link smooth to="#home" onClick={()=> handlechange()}>Inicio</Link>
            <Link smooth to="#aboutme" onClick={()=> handlechange()}>Sobre mi</Link>
            <Link smooth to="#projects" onClick={()=> handlechange()}>Proyectos</Link>
        </div>

        <Toggler onClick={themeToggler}>
          {
            theme === "light"
              ? <ModeNightIcon sx={{fontSize:20}}/>
              : <Brightness7Icon sx={{fontSize:20}}/>
          }
        </Toggler>
        
        <div className="menuIcon" onClick={()=> handlechange()}>
          <BurgerMenu clicked={isOpen} handlechange={handlechange}/>
        </div>
    </Container>
  )
}
