import { createAction } from "@reduxjs/toolkit";
import { Day } from "../../types/day";
import { TaskStatuses } from "../../const";
import { Task } from "../../types/task";

export const changeChosenDay = createAction<{chosenDay: Day}>('page/changeCurrentDay');

export const changeTaskStatus = createAction<{id: number, status: TaskStatuses}>('page/changeTaskStatus');

export const editTaskType = createAction<{id: number, type: string}>('page/editTaskType');

export const removeTask = createAction<{task: Task}>('page/removeTask');