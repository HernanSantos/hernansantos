import {Container,UlMenu,Navigation,Logo,DivMenu} from "../styledComponents/NavbarStyle"

export const Navbar = () => {

  return (
    <Container>
        <Logo as="a">Logo</Logo>
        <DivMenu>
            <UlMenu>
                <Navigation to="">Inicio</Navigation>
                <Navigation to="">Cv</Navigation>
                <Navigation to="">Proyectos</Navigation>
                <Navigation to="">Contacto</Navigation>
            </UlMenu>
        </DivMenu>
    </Container>
  )
}
