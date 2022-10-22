import { ContainerProjects,ProjectsDiv,Title } from "../styledComponents/ProjectsStyle"
import { CardProject } from "./CardProject"


export const Projects = () => {
  return (
    <ContainerProjects>
        <Title>Proyectos</Title>
        <ProjectsDiv>
          <CardProject/>
          <CardProject/>
          <CardProject/>
          <CardProject/>
        </ProjectsDiv>
    </ContainerProjects>
  )
}
