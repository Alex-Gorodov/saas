import { TaskStatuses, TaskTypes } from "../const";
import { Task } from "../types/task";
import { users } from "./users";

export const tasks: Task[] = [
  {
    id: 0,
    title: 'Send benefit review by Sunday',
    type: TaskTypes.Reminder,
    dueDate: 'December 23, 2018',
    dayNumber: 23,
    author: users[0],
    status: TaskStatuses.Completed
  },
  {
    id: 1,
    title: 'Invite to office meet-up',
    type: TaskTypes.Call,
    dueDate: 'December 23, 2018',
    dayNumber: 23,
    author: users[1],
    status: TaskStatuses.Ended,
  },
  {
    id: 2,
    title: 'Office meet-up',
    type: TaskTypes.Event,
    dueDate: 'December 23, 2018',
    dayNumber: 23,
    author: users[2],
    status: TaskStatuses.Active,
  },
  {
    id: 3,
    title: 'Send benefit review by Friday',
    type: TaskTypes.Reminder,
    dueDate: 'December 23, 2018',
    dayNumber: 23,
    author: users[3],
    status: TaskStatuses.Completed
  },
  {
    id: 4,
    title: 'Invite to second office meet-up',
    type: TaskTypes.Call,
    dueDate: 'December 23, 2018',
    dayNumber: 23,
    author: users[4],
    status: TaskStatuses.Completed,
  },
  {
    id: 5,
    title: 'Office meet-up with CEO',
    type: TaskTypes.Call,
    dueDate: 'December 23, 2018',
    dayNumber: 23,
    author: users[2],
    status: TaskStatuses.Completed,
  },
  {
    id: 6,
    title: 'Office meet-up with coffee',
    type: TaskTypes.Call,
    dueDate: 'December 24, 2018',
    dayNumber: 24,
    author: users[5],
    status: TaskStatuses.Completed,
  },
  {
    id: 7,
    title: 'Office meet-up with tea',
    type: TaskTypes.Event,
    dueDate: 'December 25, 2018',
    dayNumber: 25,
    author: users[5],
    status: TaskStatuses.Ended,
  },
  {
    id: 8,
    title: 'Office meet-up with coffee',
    type: TaskTypes.Event,
    dueDate: 'December 25, 2018',
    dayNumber: 25,
    author: users[3],
    status: TaskStatuses.Completed,
  }
]
