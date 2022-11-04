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
            <Link smooth to="#home" onClick={()=> handlechange()}>INICIO</Link>
            <Link smooth to="#aboutme" onClick={()=> handlechange()}>SOBRE MI</Link>
            <Link smooth to="#projects" onClick={()=> handlechange()}>PROYECTOS</Link>
        </div>

        <div className="menuIcon" onClick={()=> handlechange()}>
          <BurgerMenu clicked={isOpen} handlechange={handlechange}/>
        </div>
    </Container>
  )
}
