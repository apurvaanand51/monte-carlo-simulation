let distributionChart;
let convergenceChart;

export function drawDistribution(results) {

    const ctx = document.getElementById("distributionChart");

    if (distributionChart) {
        distributionChart.destroy();
    }

    const bins = {};

    results.forEach(value => {
        const key = value.toFixed(1);
        bins[key] = (bins[key] || 0) + 1;
    });

    // sort bins numerically
    const labels = Object.keys(bins).sort((a, b) => a - b);
    const frequencies = labels.map(label => bins[label]);

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

    // Downsample data to avoid dense chart
    const step = Math.ceil(history.length / 100);

    const sampledHistory = history.filter((_, i) => i % step === 0);
    const sampledLabels = sampledHistory.map((_, i) => i * step + 1);

    convergenceChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: sampledLabels,
            datasets: [
                {
                    label: "Running Probability",
                    data: sampledHistory,
                    borderColor: "rgba(255, 99, 132, 1)",
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    pointRadius: 0,
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                },
                {
                    label: "Expected Probability (0.5)",
                    data: sampledHistory.map(() => 0.5),
                    borderColor: "rgba(0,0,0,0.7)",
                    borderWidth: 2,
                    borderDash: [8,6],
                    pointRadius: 0,
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
                    ticks: { maxTicksLimit: 10 },
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