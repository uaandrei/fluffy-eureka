import { createContext, useState, PropsWithChildren, useContext } from "react";
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

const getList: () => ProjectModel = () => ({
  id: getRandom(),
  expanded: false,
  name: `Name ${getRandom()}`,
  tasks: getTasks(),
});

const getLists = () => {
  const listsState: ObjectList<ProjectModel> = {};
  for (let i = 0; i < 10; i++) {
    const list = getList();
    listsState[list.id] = list;
  }
  return listsState;
};

const listsState = getLists();

interface ProjectsContextState {
  projects: ObjectList<ProjectModel>;
  toggleExpand(projectId: string): void;
  toggleCompleted(projectId: string, taskNo: number): void;
  moveUp(projectId: string, taskNo: number): void;
  moveDown(projectId: string, taskNo: number): void;
}

const defaultState: ProjectsContextState = {
  projects: {},
  toggleExpand(_) {},
  toggleCompleted(_, __) {},
  moveUp(_, __) {},
  moveDown(_, __) {},
};

const ProjectsContext = createContext(defaultState);

const ProjectProvider: React.FC<PropsWithChildren> = (props) => {
  const [projects, setProjects] = useState(listsState);

  const toggleExpand = (projectId: string) => {
    projects[projectId].expanded = !projects[projectId].expanded;
    setProjects({ ...projects });
  };

  const toggleCompleted = (projectId: string, taskNo: number) => {
    const project = projects[projectId];
    const task = project.tasks[taskNo];
    task.completed = !task.completed;
    setProjects({ ...projects });
  };

  const moveUp = (projectId: string, taskNo: number) => {
    const project = projects[projectId];
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

  const moveDown = (projectId: string, taskNo: number) => {
    const project = projects[projectId];
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
  };
  return (
    <ProjectsContext.Provider value={{ ...state }}>
      {props.children}
    </ProjectsContext.Provider>
  );
};

const useProjectsContext = () => useContext(ProjectsContext);

export { ProjectProvider, useProjectsContext };
