import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import styles from "./dashboard.module.css";
import { useSelector } from "react-redux";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
function Statistics() {
  const { collections } = useSelector((store) => store.collections);
  const data = {
    labels: collections.map((collection) => collection.name),
    datasets: [
      {
        label: "Value",
        data: collections.map((collection) => collection.done),
        backgroundColor: collections.map((collection) => collection.color),
        borderRadius: Number.MAX_VALUE,
        barThickness: 10,
      },
    ],
  };
  //  (context) => {
  //    const chart = context.chart;
  //    const { ctx } = chart;
  //    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  //    gradient.addColorStop(0, "#ac2dcc");
  //    gradient.addColorStop(1, "#ffc9a0");
  //    return gradient;
  //  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className={styles.statistics}>
      <Bar data={data} options={options}></Bar>
    </div>
  );
}

export default Statistics;
