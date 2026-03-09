let distributionChart;
let convergenceChart;

export function drawDistribution(results) {

    const ctx = document.getElementById("distributionChart");

    if (distributionChart) {
        distributionChart.destroy();
    }

    const bins = {};

    results.forEach(value => {
        const key = value.toFixed(2);
        bins[key] = (bins[key] || 0) + 1;
    });

    const labels = Object.keys(bins);
    const frequencies = Object.values(bins);

    distributionChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Frequency",
                data: frequencies,
                backgroundColor: "rgba(54, 162, 235, 0.7)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        font: { size: 14 }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    title: {
                        display: true,
                        text: "Probability of Heads",
                        font: { size: 16 }
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: "rgba(0,0,0,0.05)"
                    },
                    title: {
                        display: true,
                        text: "Frequency",
                        font: { size: 16 }
                    }
                }
            }
        }
    });
}



export function drawConvergence(history) {

    const ctx = document.getElementById("convergenceChart");

    if (convergenceChart) {
        convergenceChart.destroy();
    }

    const labels = history.map((_, i) => i + 1);

    convergenceChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [

                {
                    label: "Running Probability",
                    data: history,
                    borderColor: "rgba(255, 99, 132, 1)",
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderWidth: 2,
                    pointRadius: 0,
                    tension: 0.15,
                    fill: true
                },

                {
                    label: "Expected Probability (0.5)",
                    data: new Array(history.length).fill(0.5),
                    borderColor: "black",
                    borderDash: [6, 6],
                    pointRadius: 0,
                    borderWidth: 2,
                    fill: false
                }

            ]
        },

        options: {
            responsive: true,

            plugins: {
                legend: {
                    labels: {
                        font: { size: 14 }
                    }
                }
            },

            scales: {

                x: {
                    grid: { display: false },

                    ticks: {
                        maxTicksLimit: 15,
                        callback: function(value, index) {
                            return index % 50 === 0 ? index + 1 : "";
                        }
                    },

                    title: {
                        display: true,
                        text: "Flip Number",
                        font: { size: 16 }
                    }
                },

                y: {
                    min: 0,
                    max: 1,

                    grid: {
                        color: "rgba(0,0,0,0.05)"
                    },

                    ticks: {
                        stepSize: 0.1
                    },

                    title: {
                        display: true,
                        text: "Probability",
                        font: { size: 16 }
                    }
                }

            }
        }
    });
}