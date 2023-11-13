// src/components/Chart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, BarElement, LinearScale } from 'chart.js/auto';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement
)


const BarChart: React.FC = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Sample Chart',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          '#5046a5',
          '#29d7f0', 
        ],
      },
    ],
  };

  const options = {
    legend: {
      display: false // hide the legend
    },
    scales: {
      x: {
        display: false // hide the x-axis
      }, 
      y: {
        beginAtZero: true,
        display: false // hide the y-axis
      },
    },
    tooltips: {
      enabled: false // disable the tooltips
    }
  };
  
  return (
    <div className="">
      <Bar data={data} options={options}/>
    </div>
  );
};

export default BarChart;
