import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registering required components for Chart.js
ChartJS.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const TrendingCoins = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const chartInstance = new ChartJS(ctx, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Bitcoin",
            data: [65, 59, 80, 81, 56, 55],
            borderColor: "#3498db", // Light Blue
            backgroundColor: "rgba(52, 152, 219, 0.2)", // Semi-transparent light blue
            borderWidth: 2,
            pointBackgroundColor: "#3498db",
            pointRadius: 4,
          },
          {
            label: "Ethereum",
            data: [55, 72, 60, 91, 66, 70],
            borderColor: "#2ecc71", // Light Green
            backgroundColor: "rgba(46, 204, 113, 0.2)", // Semi-transparent light green
            borderWidth: 2,
            pointBackgroundColor: "#2ecc71",
            pointRadius: 4,
          },
          {
            label: "Cardano",
            data: [40, 50, 70, 65, 75, 60],
            borderColor: "#f39c12", // Light Yellow
            backgroundColor: "rgba(243, 156, 18, 0.2)", // Semi-transparent yellow
            borderWidth: 2,
            pointBackgroundColor: "#f39c12",
            pointRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              color: "#333", // Dark text for light theme
              font: {
                size: 14,
                family: "Arial, sans-serif",
              },
            },
          },
          tooltip: {
            mode: "index",
            intersect: false,
            backgroundColor: "#fff", // Light tooltip background
            titleColor: "#333", // Dark title for light background
            bodyColor: "#333", // Dark body text
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Months",
              color: "#333", // Dark axis title
              font: {
                size: 14,
              },
            },
            ticks: {
              color: "#333", // Dark ticks
            },
          },
          y: {
            title: {
              display: true,
              text: "Value",
              color: "#333", // Dark axis title
              font: {
                size: 14,
              },
            },
            ticks: {
              beginAtZero: true,
              color: "#333", // Dark ticks
            },
          },
        },
      },
    });

    // Cleanup on unmount
    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-white via-gray-100 to-gray-200 mx-auto mt-[50px] p-6 rounded-lg shadow-xl max-w-[1350px] ">
      <h2 className="text-2xl font-bold text-black mb-6"></h2>
      <canvas ref={chartRef} width="1100" height="400" className="bg-transparent" />
    </div>
  );
};

export default TrendingCoins;
