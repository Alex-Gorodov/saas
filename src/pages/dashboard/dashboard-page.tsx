import { Dashboard } from "../../components/dashboard/dashboard";
import { Graph } from "../../components/graph/graph";

export const DashboardPage = (): JSX.Element => {
  return (
    <div className="dashboard">
      <Dashboard/>
      <Graph type={"line"}/>
      <Graph type={"pie"}/>
    </div>
  );
}
