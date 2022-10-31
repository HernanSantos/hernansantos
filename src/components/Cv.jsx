import { ContainerCv, Button,ButtonDiv } from "../styledComponents/CvStyle"

export const Cv = () => {
  return (
    <ContainerCv>
        <h1>Curriculum vitae</h1>
        <ButtonDiv>
            <Button>Ver</Button>
            <Button>Descargar</Button>
        </ButtonDiv>
        <span>Enviar por email</span>
        <input type="text" placeholder="Direccion de email"/>
    </ContainerCv>
  )
}
