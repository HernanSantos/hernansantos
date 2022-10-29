import { ContainerCard, Grid, Img1 } from "../styledComponents/CardProjectStyle"
import { SpecialButton } from "../styledComponents/SpecialButtonStyle"

import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import GitHubIcon from '@mui/icons-material/GitHub';


export const CardProject = () => {
  return (

    <ContainerCard>
        <Grid className="grid-container">
            <Img1 img="img1"></Img1>
            <Img1 img="img2"></Img1>
            <Img1 img="img3"></Img1>
        </Grid>
        <div className="infoContainer">
            <h1>Pokedex</h1>
            <div className="tecnologieContainer">
                <span>ReactJs</span>
                <span>Styled-Components</span>
                <span>Bootstrap</span>
            </div>
            <p className="paragraph">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <div className="buttonContainer">
                <SpecialButton wsize="md"><GitHubIcon/></SpecialButton>
                <SpecialButton wsize="md"><OpenInBrowserIcon/></SpecialButton>
            </div>
        </div>
    </ContainerCard>
  )
}