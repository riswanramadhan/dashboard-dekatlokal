'use client';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function StatusChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 2000, easing: 'easeOutQuart' }, // Animasi Smooth
    plugins: { legend: { display: false } },
    scales: { x: { grid: { display: false } }, y: { display: false } }
  };

  const data = {
    labels: ['Belum Siap', 'Pendampingan', 'Siap Digital', 'Website Aktif'],
    datasets: [{
      data: [15, 37, 50, 46],
      backgroundColor: ['#F1F5F9', '#FBBF24', '#34D399', '#2563EB'],
      borderRadius: 8,
      barThickness: 40,
    }],
  };

  return <div className="h-64"><Bar options={options} data={data} /></div>;
}