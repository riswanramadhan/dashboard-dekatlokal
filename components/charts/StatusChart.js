'use client';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function StatusChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'x',
    animation: { 
      duration: 2000, 
      easing: 'easeOutQuart',
      animateScale: false,
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data') {
          delay = context.dataIndex * 100 + context.datasetIndex * 50;
        }
        return delay;
      },
    },
    plugins: { 
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 12,
        titleFont: { size: 13, weight: 'bold' },
        bodyFont: { size: 12 },
        borderColor: '#2563EB',
        borderWidth: 1,
        callbacks: {
          label: function(context) {
            return context.parsed.y + ' UMKM';
          }
        }
      }
    },
    scales: { 
      x: { 
        grid: { display: false }, 
        ticks: { color: '#94a3b8', font: { size: 11, weight: '500' } },
        title: { display: true, text: 'Status Kesiapan Digital', color: '#64748B', font: { weight: 'bold' } }
      }, 
      y: { 
        display: true,
        grid: { display: true, color: '#E2E8F0', drawBorder: false },
        ticks: { color: '#94a3b8', font: { size: 11 } },
        title: { display: true, text: 'Jumlah UMKM', color: '#64748B', font: { weight: 'bold' } }
      } 
    }
  };

  const data = {
    labels: ['Belum Siap', 'Pendampingan', 'Siap Digital', 'Website Aktif'],
    datasets: [{
      label: 'UMKM',
      data: [15, 37, 50, 46],
      backgroundColor: [
        'rgba(241, 245, 249, 1)',
        'rgba(251, 191, 36, 1)',
        'rgba(52, 211, 153, 1)',
        'rgba(37, 99, 235, 1)'
      ],
      borderColor: [
        '#cbd5e1',
        '#f59e0b',
        '#10b981',
        '#2563eb'
      ],
      borderWidth: 2,
      borderRadius: 8,
      barThickness: 45,
      hoverBackgroundColor: [
        'rgba(226, 232, 240, 1)',
        'rgba(254, 209, 94, 1)',
        'rgba(110, 231, 183, 1)',
        'rgba(59, 130, 246, 1)'
      ],
    }],
  };

  return <div className="h-72"><Bar options={options} data={data} /></div>;
}