'use client';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler);

export default function GrowthChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 2500, easing: 'easeInOutExpo' },
    plugins: { legend: { display: false } },
    scales: { x: { grid: { display: false } }, y: { display: false } }
  };

  const data = {
    labels: ['Okt', 'Nov', 'Des', 'Jan', 'Feb'],
    datasets: [{
      fill: true,
      data: [12, 25, 38, 46, 52],
      borderColor: '#2563EB',
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(37, 99, 235, 0.2)');
        gradient.addColorStop(1, 'rgba(37, 99, 235, 0)');
        return gradient;
      },
      tension: 0.4, // Melengkung halus
    }],
  };

  return <div className="h-48"><Line options={options} data={data} /></div>;
}