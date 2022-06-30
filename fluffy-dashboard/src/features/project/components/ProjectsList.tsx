import _ from "lodash";
import { ProjectRowItem } from "../components";
import { useProjectsContext } from "../state/ProjectsState";

const ProjectsList = () => {
  const { projects } = useProjectsContext();
  return (
    <div>
      <div className="mb-3">Project Home</div>
      <div className="md:w-3/4 w-full">
        {projects &&
          _.map(projects, (project) => (
            <ProjectRowItem project={project} key={project.id} />
          ))}
      </div>
    </div>
  );
};

export { ProjectsList };
