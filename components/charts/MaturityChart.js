'use client';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function MaturityChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2500,
      easing: 'easeInOutQuart',
      animateScale: true,
      animateRotate: true,
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data') {
          delay = context.dataIndex * 50 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    scales: {
      r: {
        angleLines: { color: '#E2E8F0', lineWidth: 1 },
        grid: { color: '#E2E8F0', circular: true, drawBorder: true, borderColor: '#CBD5E1' },
        pointLabels: {
          font: { size: 12, family: "'Inter', sans-serif", weight: 'bold' },
          color: '#475569',
          padding: 10
        },
        ticks: { 
          display: true, 
          stepSize: 20,
          color: '#94a3b8',
          font: { size: 10 }
        },
        min: 0,
        max: 100
      }
    },
    plugins: {
      legend: { 
        position: 'top', 
        align: 'end', 
        labels: { 
          boxWidth: 12, 
          usePointStyle: true,
          padding: 15,
          font: { size: 12, weight: 'bold' },
          color: '#475569'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 12,
        titleFont: { size: 13, weight: 'bold' },
        bodyFont: { size: 12 },
        borderColor: '#2563EB',
        borderWidth: 1,
        callbacks: {
          label: function(context) {
            return context.dataset.label + ': ' + context.parsed.r;
          }
        }
      }
    }
  };

  const data = {
    labels: ['Pemasaran Digital', 'Manajemen Keuangan', 'Kualitas Produk', 'Logistik', 'Mindset Digital'],
    datasets: [
      {
        label: 'Sebelum Program',
        data: [40, 50, 70, 60, 45],
        backgroundColor: 'rgba(148, 163, 184, 0.15)',
        borderColor: '#94a3b8',
        borderWidth: 2.5,
        pointBackgroundColor: '#94a3b8',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: 'Sesudah Program',
        data: [85, 75, 80, 85, 90],
        backgroundColor: 'rgba(37, 99, 235, 0.2)',
        borderColor: '#2563EB',
        borderWidth: 2.5,
        pointBackgroundColor: '#2563EB',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  return <div className="h-96"><Radar data={data} options={options} /></div>;
}