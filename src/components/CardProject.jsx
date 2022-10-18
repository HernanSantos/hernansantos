import { ContainerCard, ContainerImg, CardBody,CardImg,CardLinks,Title,CardIcons,CardParagraph } from "../styledComponents/CardProjectStyle"


export const CardProject = () => {
  return (

    <ContainerCard>
        <ContainerImg>
            <CardImg src="https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg" alt="" />
        </ContainerImg>
        
        <CardBody>
            <Title>Pokedex</Title>
            
            <CardIcons>
                <span>icono</span>
                <span>icono</span>
            </CardIcons>

            <CardParagraph>
                Primer proyecto realizado para practicar las tecnologias aprendidas
            </CardParagraph>  
            
            <CardLinks>
                <a href="#" >Link github</a>
                <a href="#" >Link web</a>
            </CardLinks>
        </CardBody>
    </ContainerCard>
  )
}
