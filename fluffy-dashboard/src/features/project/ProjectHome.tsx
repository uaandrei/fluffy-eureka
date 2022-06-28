import { ProjectList } from "./components";
import { ProjectItemModel, ProjectListModel } from "./models";

const getItem: () => ProjectItemModel = () => ({
  id: getRandom(),
  task: `Task ${getRandom()}`,
});

const getList: () => ProjectListModel = () => ({
  id: getRandom(),
  expanded: false,
  name: `Name ${getRandom()}`,
  items: [
    getItem(),
    getItem(),
    getItem(),
    getItem(),
    getItem(),
    getItem(),
    getItem(),
  ],
});

const getLists = () => [
  getList(),
  getList(),
  getList(),
  getList(),
  getList(),
  getList(),
  getList(),
  getList(),
  getList(),
  getList(),
  getList(),
  getList(),
];

const getRandom = () => Math.random().toString();

const ProjectHome = () => {
  const lists = getLists();
  return (
    <div>
      <div>Project Home</div>
      <div className="xl:w-1/2 md:w-3/4 w-full">
        {lists.map((list) => (
          <ProjectList list={list} key={list.id} />
        ))}
      </div>
    </div>
  );
};

export { ProjectHome };
