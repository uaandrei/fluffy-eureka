import _ from "lodash";
import { ProjectsList } from "./components";
import { ProjectProvider } from "./state/ProjectsState";

const ProjectHome = () => {
  return (
    <div className="container mx-auto">
      <ProjectProvider>
        <ProjectsList />
      </ProjectProvider>
    </div>
  );
};

export { ProjectHome };
