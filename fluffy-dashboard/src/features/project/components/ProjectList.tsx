import _ from "lodash";
import { CollapseIcon, ExpandIcon } from "../../../components/icons";
import { ProjectModel } from "../models";
import { useProjectsContext } from "../state/ProjectsState";
import { TaskItem } from "./";

interface ProjectProps {
  project: ProjectModel;
}

const ProjectList = ({ project }: ProjectProps) => {
  const { toggleExpand } = useProjectsContext();
  return (
    <div>
      <h1
        onClick={() => toggleExpand(project.id)}
        className="hover:cursor-pointer"
      >
        <div className="flex flex-row">
          <div className="flex-none mr-2">
            {project.expanded ? <CollapseIcon /> : <ExpandIcon />}
          </div>
          <div className="flex-auto">{project.name}</div>
        </div>
      </h1>
      {project.expanded &&
        _.map(project.tasks, (item) => (
          <div key={item.id}>
            <TaskItem projectId={project.id} task={item} />
          </div>
        ))}
    </div>
  );
};

export { ProjectList };
