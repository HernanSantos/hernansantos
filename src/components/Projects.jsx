import { ContainerProjects} from "../styledComponents/ProjectsStyle"
import { CardHover } from "./CardHover"


export const Projects = () => {
  return (
    <ContainerProjects id="projects">
        <h1>PROYECTOS</h1>
        <hr className="lineTitle"/>
        <div className="projectsDiv">
          <CardHover/>
          <CardHover/>
          <CardHover/>
          <CardHover/>
        </div>
    </ContainerProjects>
  )
}
