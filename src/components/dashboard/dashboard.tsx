import { useSelector } from "react-redux";
import cn from 'classnames';
import { RootState } from "../../store/RootState";
import { tasksCalendar } from "../../mocks/tasks-calendar";
import { changeChosenDay } from "../../store/calendar/calendar-actions";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { TaskItem } from "../task/task";
import { Day } from "../../types/day";

export function Dashboard(): JSX.Element {
  const isMenuOpened = useAppSelector((state) => state.menu.menuStatus.isOpened);

  const tasksClassName = cn({
    'tasks section section--closed' : !isMenuOpened,
    'tasks section' : isMenuOpened,
  })

  const currentDay = useSelector((state: RootState) => {
    return state.calendar.currentDay;
  })

  const activeDay = useSelector((state: RootState) => {
    return state.calendar.chosenDay;
  })

  const tasks = useAppSelector((state) => state.calendar.tasks);

  const tasksCompleted = tasks.filter(
    (task) => task.status === 'Completed' && task.dayNumber === activeDay.dayNumber
  )

  const activeDayTasks = tasks.filter((task) => task.dayNumber === activeDay.dayNumber)

  function printDate(day: Day) {
    return `${activeDay.dayNumber} ${activeDay.month}, ${activeDay.dayOfWeek}`;
  }

  const dispatch = useAppDispatch();

  return (
    <div className={tasksClassName}>
      <div className="calendar__wrapper">
        <div className="tasks__calendar calendar">
          <div className="calendar__description">
            <p className="calendar__status">{tasksCompleted.length} task completed out of {activeDayTasks.length}</p>
            <span className="calendar__statusbar">
              <span className="calendar__statusbar calendar__statusbar--completed" style={activeDayTasks.length !== 0 ? {width: `${tasksCompleted.length / activeDayTasks.length * 100}%`} : {width: '0'}}></span>
            </span>
          </div>
          <p className="calendar__current-date">{printDate(activeDay)}</p>
          <ul className="calendar__list">
            {
              tasksCalendar.map((day) => {
                function changeActiveDay() {
                  dispatch(changeChosenDay({chosenDay: day}));
                }

                const dayClassName = cn('calendar__day day',{
                  'day--current' : currentDay.dayNumber === day.dayNumber,
                  'day--active' : activeDay.dayNumber === day.dayNumber,
                })
                return (
                  <li className={dayClassName} onClick={changeActiveDay} key={day.dayNumber}>
                    <p className="day__week">{day.dayOfWeek}</p>
                    <p className="day__number">{day.dayNumber}</p>
                  </li>
                  )
              })
            }
          </ul>
        </div>
      </div>
      <div className="tasks__list-wrapper">
        <ul className="tasks__list">
          {
            activeDayTasks.map((task) => (
              activeDay.dayNumber === task.dayNumber &&
              <TaskItem task={task} key={`${task.dayNumber}-${task.title}`}/>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
