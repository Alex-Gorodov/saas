import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";
import { RootState } from "../../store/RootState";
import { useAppSelector } from "../../hooks";

type GraphProps = {
  type: string;
}

export function Graph({type}: GraphProps): JSX.Element {
  const activeDay = useSelector((state: RootState) => {
    return state.calendar.chosenDay;
  })

  const tasks = useAppSelector((state) => state.calendar.tasks);

  const tasksCompleted = tasks.filter(
    (task) => task.status === 'Completed' && task.dayNumber === activeDay.dayNumber
  )

  const tasksActive = tasks.filter(
    (task) => task.status === 'Active' && task.dayNumber === activeDay.dayNumber
  )

  const activeDayTasks = tasks.filter((task) => task.dayNumber === activeDay.dayNumber)

  const options = {
    title: {
      text: ""
    },
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
    },
    plotOptions: {
      pie: {
        lineWidth: 8,
        borderWidth: 0,
        borderRadius: 0,
        dataLabels: {
          enabled: false,
          color: "rgba(0,0,0,0.87)",
          style: {
            fontWeight: "normal",
            textOutline: "none"
          },
          distance: 0,
        },
        slicedOffset: 0,
        startAngle: 90,
      },
    },
    series: [
      {
        animation: {
          duration: 600,
        },
        type: type,
        innerSize: "92%",
        data: [
          {
            name: "Active",
            color: '#ffb946',
            y: tasksActive.length
          },
          {
            name: "Ended",
            color: '#f7685b',
            y: activeDayTasks.length - tasksActive.length - tasksCompleted.length
          },
          {
            name: "Completed",
            color: '#2ed47a',
            y: tasksCompleted.length
          },
        ],
      }
    ]
  };

  return (
    <div className="graph section" data-graph-type={type}>
      <p className="graph__title">
        <span>
          {(type === 'line' && 'Deals') || (type === 'pie' && 'Tasks')}
        </span>
      </p>
      <div className="graph__wrapper">
        <span className="graph__percentage">{ type === 'pie' &&
          `${activeDayTasks.length
            ? Math.round(tasksCompleted.length / activeDayTasks.length * 100)
            : '0'}%`
        }</span>
        <HighchartsReact highcharts={Highcharts} options={options} />
        <ul className="graph__legend">
          <li className="graph__item" data-graph="active">Active</li>
          <li className="graph__item" data-graph="completed">Completed</li>
          <li className="graph__item" data-graph="ended">Ended</li>
        </ul>
      </div>
    </div>
  )
};
