import { useState } from "react";
import { Task } from "../../types/task";
import { EditIcon, EditedIcon, RemoveIcon } from "../icons/icons";
import { useAppDispatch } from "../../hooks";
import { changeTaskStatus, editTaskType, removeTask } from "../../store/calendar/calendar-actions";
import { TaskStatuses, TaskTypes } from "../../const";

type TaskItemProps = {
  task: Task;
}

function renderFirstSwitch(p: string) {
  switch (p) {
    case  'Active':
      return TaskStatuses.Ended;
    case 'Completed':
      return TaskStatuses.Active;
    case 'Ended':
      return TaskStatuses.Completed;
    default:
      return TaskStatuses.Completed;
  }
}

function renderSecondSwitch(p: string) {
  switch (p) {
    case  'Active':
      return TaskStatuses.Completed;
    case 'Completed':
      return TaskStatuses.Ended;
    case 'Ended':
      return TaskStatuses.Active;
    default:
      return TaskStatuses.Completed;
  }
}


export function TaskItem({task}: TaskItemProps): JSX.Element {

  const [activeTask, setActiveTask] = useState<number | undefined>(undefined);

  const dispatch = useAppDispatch();

  // const status = useAppSelector((state) => state.calendar.tasks[task.id].status);

  // const type = useAppSelector((state) => state.calendar.tasks[task.id].type);

  const [isEditable, setIsEditable] = useState(false);

  const options = ['choose', TaskTypes.Call, TaskTypes.Event, TaskTypes.Reminder]

  return (
  <li className="tasks__item task-item"
    key={`task-${task.title}-${task.dayNumber}`}
    onMouseEnter={() => setActiveTask(task.id)}
    onMouseLeave={() => setActiveTask(undefined)}
  >
    <h2 className="task-item__title" contentEditable={isEditable}>{task.title}</h2>
    <p className="task-item__date" contentEditable={isEditable}>
      <span contentEditable="false">Due date: </span>{task.dueDate}
    </p>
    <span className="task-item__type" contentEditable={isEditable}>
      {!isEditable
      ? task.type
      : <select onChange={(e) => dispatch(editTaskType({id: task.id, type: e.target.value}))}>
          {options.map((option, index) => {
            return <option key={'option-' + index}>{option}</option>
          })}
        </select>
      }
    </span>
    <div className="task-item__author">
      <img className="task-item__author-avatar" src={task.author.avatar} alt={task.author.name} width="24" height="24"/>
      <span className="task-item__author-name">{task.author.name}</span>
    </div>
    {
      activeTask === task.id
      ? <div className="task-item__control-panel task-panel">
          <button className="task-panel__item task-panel__item--status-btn" onClick={() => dispatch(changeTaskStatus({id: task.id, status: renderFirstSwitch(task.status) !== undefined ? renderFirstSwitch(task.status) : task.status}))} data-button-type={renderFirstSwitch(task.status)} title={renderFirstSwitch(task.status)}></button>
          <button className="task-panel__item task-panel__item--status-btn" onClick={() => dispatch(changeTaskStatus({id: task.id, status: renderSecondSwitch(task.status) !== undefined ? renderSecondSwitch(task.status) : task.status}))} data-button-type={renderSecondSwitch(task.status)} title={renderSecondSwitch(task.status)}></button>
          <button className="task-panel__item task-panel__item--edit" title={isEditable ? "Apply" : "Edit"} onClick={() => setIsEditable(!isEditable)}>
            {
              isEditable ? <EditedIcon/> : <EditIcon/>
            }
          </button>
          <button className="task-panel__item task-panel__item--remove" title="Remove" onClick={() => dispatch(removeTask({task: task}))}><RemoveIcon/></button>
        </div>
      : ''
    }
    <span className="task-item__status" data-status={task.status}>{task.status}</span>
  </li>
  );
}
