import {createMenuTemplate} from "./view/menu.js";
import {createFilterTemplate} from "./view/filter.js";
import {createSortTemplate} from "./view/sort.js";
import {createBoardTemplate} from "./view/board.js";
import {createTaskListTemplate} from "./view/task-list.js";
import {createTaskTemplate} from "./view/task.js";
import {createAddTaskTemplate} from "./view/task-add.js";
import {createLoadMoreTemplate} from "./view/more-button.js";

const TASK_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMain = document.querySelector(`.main`);
const siteMenu = siteMain.querySelector(`.main__control`);

render(siteMenu, createMenuTemplate(), `beforeend`);
render(siteMain, createFilterTemplate(), `beforeend`);
render(siteMain, createBoardTemplate(), `beforeend`);

const siteBoard = siteMain.querySelector(`.board`);
render(siteBoard, createSortTemplate(), `beforeend`);
render(siteBoard, createTaskListTemplate(), `beforeend`);

const siteTasksList = siteMain.querySelector(`.board__tasks`);
render(siteTasksList, createAddTaskTemplate(), `beforeend`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(siteTasksList, createTaskTemplate(), `beforeend`);
}

render(siteBoard, createLoadMoreTemplate(), `beforeend`);
