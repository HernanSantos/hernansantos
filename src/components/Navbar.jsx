import React from 'react';
import {Container} from "../styledComponents/NavbarStyle"
import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { HashLink as Link} from "react-router-hash-link";

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handlechange = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <Container>
      <span></span>
        <div className={`menuContainer ${isOpen ? "active" : "desactive" }`}>
            <Link smooth to="#home" onClick={()=> handlechange()}>Inicio</Link>
            <Link smooth to="#aboutme" onClick={()=> handlechange()}>Sobre mi</Link>
            <Link smooth to="#projects" onClick={()=> handlechange()}>Proyectos</Link>
        </div>

        <div className="menuIcon" onClick={()=> handlechange()}>
          <BurgerMenu clicked={isOpen} handlechange={handlechange}/>
        </div>
    </Container>
  )
}
