import { createReducer } from "@reduxjs/toolkit";
import { CalendarState } from "../../types/state";
import { changeChosenDay, changeTaskStatus, editTaskType, removeTask } from "./calendar-actions";
import { tasksCalendar } from "../../mocks/tasks-calendar";
import { tasks } from "../../mocks/tasks";

const initialState: CalendarState = {
  currentDay: tasksCalendar[1],
  chosenDay: tasksCalendar[0],
  tasks: tasks,
}

export const calendarReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeChosenDay, (state, action) => {
      const { chosenDay } = action.payload;
      state.chosenDay = chosenDay;
    })
    .addCase(changeTaskStatus, (state, action) => {
      const { status } = action.payload;
      const objectWIthIndex = state.tasks.findIndex((task) => task.id === action.payload.id);
      state.tasks[objectWIthIndex].status = status;
    })
    .addCase(editTaskType, (state, action) => {
      const { type } = action.payload;
      const objectWIthIndex = state.tasks.findIndex((task) => task.id === action.payload.id);
      state.tasks[objectWIthIndex].type = type;
    })
    .addCase(removeTask, (state, action) => {
      const id = action.payload.task.id;
      const objectWIthIndex = state.tasks.findIndex((task) => task.id === id);
      state.tasks.splice(objectWIthIndex, 1);
      console.log(objectWIthIndex);
    })
})
