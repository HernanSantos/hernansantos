import { ContainerCard, Grid, Img1 } from "../styledComponents/CardProjectStyle"
import { Button } from "../styledComponents/Button";

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
                <Button bg="#F05454" size="sm"><GitHubIcon/></Button>
                <Button bg="#F05454" size="sm"><OpenInBrowserIcon/></Button>
            </div>
        </div>
    </ContainerCard>
  )
}