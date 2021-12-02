import React from 'react';
import { Line, defaults } from 'react-chartjs-2';
import Custom from '../Dashboard/dashContent.module.css';

defaults.global.tooltips.enabled = false;
defaults.global.legend.position = 'bottom';

const Chartdata = () => {
    return (
        <div className={Custom.insideBoxed}>
            <Line
                data={{
                labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
                datasets: [
                    {
                    label: '# of Services',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                    },
                    // {
                    //   label: 'Quantity',
                    //   data: [47, 52, 67, 58, 9, 50],
                    //   backgroundColor: 'orange',
                    //   borderColor: 'red',
                    // },
                ],
                }}
                height={550}
                width={964}
                options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                    {
                        ticks: {
                        beginAtZero: true,
                        },
                    },
                    ],
                },
                legend: {
                    labels: {
                    fontSize: 25,
                    },
                },
                title: {
                    display: true,
                    text: 'Service Today',
                    fontSize: 35,
                },
                }}
            />
        </div>
    );
}

export default Chartdata;
