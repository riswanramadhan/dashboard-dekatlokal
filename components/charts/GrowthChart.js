'use client';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export default function GrowthChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { intersect: false, mode: 'index' },
    animation: { 
      duration: 2500, 
      easing: 'easeInOutExpo',
      animateScale: true,
      animateRotate: true
    },
    plugins: { 
      legend: { display: true, position: 'top', labels: { font: { size: 12, weight: 'bold' }, color: '#64748B', padding: 15, usePointStyle: true } },
      tooltip: { 
        backgroundColor: 'rgba(0,0,0,0.8)', 
        padding: 12, 
        titleFont: { size: 13, weight: 'bold' },
        bodyFont: { size: 12 },
        borderColor: '#2563EB',
        borderWidth: 1,
        displayColors: true,
        callbacks: {
          label: function(context) {
            return context.dataset.label + ': ' + context.parsed.y + ' Website';
          }
        }
      }
    },
    scales: { 
      x: { grid: { display: false, color: '#E2E8F0' }, ticks: { color: '#94a3b8', font: { size: 11 } } }, 
      y: { 
        display: true, 
        grid: { display: true, color: '#E2E8F0', drawBorder: false },
        ticks: { color: '#94a3b8', font: { size: 11 }, callback: function(value) { return value } },
        title: { display: true, text: 'Jumlah Website', color: '#64748B' }
      } 
    }
  };

  const data = {
    labels: ['Okt', 'Nov', 'Des', 'Jan', 'Feb'],
    datasets: [{
      label: 'Website Aktif',
      fill: true,
      data: [12, 25, 38, 46, 52],
      borderColor: '#2563EB',
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(37, 99, 235, 0.3)');
        gradient.addColorStop(1, 'rgba(37, 99, 235, 0.01)');
        return gradient;
      },
      tension: 0.5,
      borderWidth: 3,
      pointRadius: 6,
      pointHoverRadius: 8,
      pointBackgroundColor: '#2563EB',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointHoverBackgroundColor: '#1d4ed8',
      segment: {
        borderDash: (ctx) => ctx.p0 === ctx.p1 ? [0] : undefined,
      }
    }],
  };

  return <div className="h-56"><Line options={options} data={data} /></div>;
}