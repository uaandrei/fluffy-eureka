import {
  createContext,
  useState,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { ObjectList } from "../../../models";
import { ProjectModel, TaskModel } from "../models";

const getRandom = () => Math.random().toString();

const getTask: (i: number) => TaskModel = (i: number) => ({
  id: getRandom(),
  title: `Task ${getRandom()}`,
  orderNo: i,
  completed: false,
});

const getTasks = () => {
  const tasks: ObjectList<TaskModel> = {};
  for (let i = 0; i < 10; i++) {
    const task = getTask(i);
    tasks[task.orderNo] = task;
  }
  return tasks;
};

const getList: (i: number) => ProjectModel = (i: number) => ({
  id: getRandom(),
  expanded: false,
  name: `Name ${getRandom()}`,
  tasks: getTasks(),
  orderNo: i,
});

const getLists = () => {
  const listsState: ObjectList<ProjectModel> = {};
  for (let i = 0; i < 10; i++) {
    const list = getList(i);
    listsState[list.orderNo] = list;
  }
  return listsState;
};

const listsState = getLists();

interface ProjectsContextState {
  projects: ObjectList<ProjectModel>;
  toggleExpand(projectNo: number): void;
  toggleCompleted(projectNo: number, taskNo: number): void;
  moveUp(projectNo: number, taskNo: number): void;
  moveDown(projectNo: number, taskNo: number): void;
  moveProjectDown(projectNo: number): void;
  moveProjectUp(projectNo: number): void;
}

const defaultState: ProjectsContextState = {
  projects: {},
  toggleExpand(_) {},
  toggleCompleted(_, __) {},
  moveUp(_, __) {},
  moveDown(_, __) {},
  moveProjectDown(_) {},
  moveProjectUp(_) {},
};

const ProjectsContext = createContext(defaultState);

const ProjectProvider: React.FC<PropsWithChildren> = (props) => {
  const [projects, setProjects] = useState(listsState);

  const toggleExpand = (projectNo: number) => {
    projects[projectNo].expanded = !projects[projectNo].expanded;
    setProjects({ ...projects });
  };

  const toggleCompleted = (projectNo: number, taskNo: number) => {
    const project = projects[projectNo];
    const task = project.tasks[taskNo];
    task.completed = !task.completed;
    setProjects({ ...projects });
  };

  const moveProjectUp = (projectNo: number) => {
    const project = projects[projectNo];
    const upperProject = projects[projectNo - 1];
    if (upperProject) {
      project.orderNo = projectNo - 1;
      upperProject.orderNo = projectNo;
      projects[projectNo - 1] = project;
      projects[projectNo] = upperProject;
      setProjects({ ...projects });
    }
  };

  const moveProjectDown = (projectNo: number) => {
    const project = projects[projectNo];
    const lowerProject = projects[projectNo + 1];
    if (lowerProject) {
      project.orderNo = projectNo + 1;
      lowerProject.orderNo = projectNo;
      projects[projectNo + 1] = project;
      projects[projectNo] = lowerProject;
      setProjects({ ...projects });
    }
  };

  const moveUp = (projectNo: number, taskNo: number) => {
    const project = projects[projectNo];
    const task = project.tasks[taskNo];
    const upperTask = project.tasks[taskNo - 1];
    if (upperTask) {
      task.orderNo = taskNo - 1;
      upperTask.orderNo = taskNo;
      project.tasks[taskNo - 1] = task;
      project.tasks[taskNo] = upperTask;
      setProjects({ ...projects });
    }
  };

  const moveDown = (projectNo: number, taskNo: number) => {
    const project = projects[projectNo];
    const task = project.tasks[taskNo];
    const lowerTask = project.tasks[taskNo + 1];
    if (lowerTask) {
      task.orderNo = taskNo + 1;
      lowerTask.orderNo = taskNo;
      project.tasks[taskNo + 1] = task;
      project.tasks[taskNo] = lowerTask;
      setProjects({ ...projects });
    }
  };

  const state = {
    projects,
    toggleExpand,
    toggleCompleted,
    moveUp,
    moveDown,
    moveProjectDown,
    moveProjectUp,
  };
  return (
    <ProjectsContext.Provider value={{ ...state }}>
      {props.children}
    </ProjectsContext.Provider>
  );
};

const useProjectsContext = () => useContext(ProjectsContext);

export { ProjectProvider, useProjectsContext };
