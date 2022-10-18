import { ContainerProjects,ProjectsDiv } from "../styledComponents/ProjectsStyle"
import { CardProject } from "./CardProject"


export const Projects = () => {
  return (
    <ContainerProjects>
        <h1>Proyectos</h1>
        <ProjectsDiv>
          <CardProject/>
        </ProjectsDiv>
    </ContainerProjects>
  )
}
