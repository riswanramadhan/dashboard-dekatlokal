'use client';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function MaturityChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: { color: '#E2E8F0' },
        grid: { color: '#E2E8F0' },
        pointLabels: {
          font: { size: 12, family: "'Inter', sans-serif" },
          color: '#64748B'
        },
        ticks: { display: false, stepSize: 20 }
      }
    },
    plugins: {
      legend: { position: 'top', align: 'end', labels: { boxWidth: 10, usePointStyle: true } }
    }
  };

  const data = {
    labels: ['Pemasaran Digital', 'Manajemen Keuangan', 'Kualitas Produk', 'Logistik', 'Mindset Digital'],
    datasets: [
      {
        label: 'Rata-rata Sebelum',
        data: [40, 50, 70, 60, 45],
        backgroundColor: 'rgba(148, 163, 184, 0.2)',
        borderColor: '#94a3b8',
        borderWidth: 2,
      },
      {
        label: 'Rata-rata Sesudah',
        data: [85, 75, 80, 85, 90],
        backgroundColor: 'rgba(37, 99, 235, 0.2)',
        borderColor: '#2563EB',
        borderWidth: 2,
      },
    ],
  };

  return <div className="h-80"><Radar data={data} options={options} /></div>;
}