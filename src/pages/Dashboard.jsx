import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const summary = [
    {
      title: "GPA",
      value: "9.85",
      icon: "🎓",
      gradient: "from-indigo-400 via-indigo-300 to-indigo-200",
    },
    {
      title: "Attendance",
      value: "90%",
      icon: "📅",
      gradient: "from-green-400 via-green-300 to-green-200",
    },
    {
      title: "Subjects",
      value: "12/15",
      icon: "📚",
      gradient: "from-yellow-400 via-yellow-300 to-yellow-200",
    },
    {
      title: "Credits",
      value: "36",
      icon: "✅",
      gradient: "from-pink-400 via-pink-300 to-pink-200",
    },
  ];

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Attendance %",
        data: [85, 90, 88, 92, 89],
        backgroundColor: "#3b82f6",
        borderRadius: 5,
      },
    ],
  };

  const doughnutData = {
    labels: ["Core", "Elective", "Lab"],
    datasets: [
      {
        data: [18, 12, 6],
        backgroundColor: ["#6366f1", "#10b981", "#f59e0b"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 p-4 flex justify-center items-center">
      <div className="grid grid-cols-2 gap-6 w-full max-w-6xl h-[85vh]">
        {/* Left: Cards */}
        <div className="grid grid-cols-2 gap-3">
          {summary.map((item) => (
            <div
              key={item.title}
              className={`rounded-xl p-3 text-white shadow-md bg-gradient-to-r ${item.gradient} flex flex-col justify-center items-start`}
            >
              <div className="text-2xl">{item.icon}</div>
              <h4 className="text-xs mt-1 font-semibold">{item.title}</h4>
              <p className="text-lg font-bold">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Right: Charts */}
        <div className="grid grid-rows-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-sm font-medium text-gray-700 mb-2">📈 Attendance Trend</h3>
            <div className="h-[130px]">
              <Bar data={barData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-sm font-medium text-gray-700 mb-2">📊 Credit Breakdown</h3>
            <div className="h-[130px]">
              <Doughnut data={doughnutData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
