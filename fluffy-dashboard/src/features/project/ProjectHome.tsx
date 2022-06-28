import _ from "lodash";
import { ProjectsList } from "./components";
import { ProjectProvider } from "./state/ProjectsState";

const ProjectHome = () => {
  return (
    <ProjectProvider>
      <ProjectsList />
    </ProjectProvider>
  );
};

export { ProjectHome };
