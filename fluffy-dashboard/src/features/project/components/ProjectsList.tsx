import _ from "lodash";
import { ProjectList } from "../components";
import { useProjectsContext } from "../state/ProjectsState";

const ProjectsList = () => {
  const { projects } = useProjectsContext();
  return (
    <div>
      <div>Project Home</div>
      <div className="xl:w-1/2 md:w-3/4 w-full">
        {projects &&
          _.map(projects, (project) => (
            <ProjectList project={project} key={project.id} />
          ))}
      </div>
    </div>
  );
};

export { ProjectsList };
