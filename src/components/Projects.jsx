import { ContainerProjects} from "../styledComponents/ProjectsStyle"
import { CardHover } from "./CardHover"


export const Projects = () => {
  return (
    <ContainerProjects>
        <h1>Proyectos</h1>
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
