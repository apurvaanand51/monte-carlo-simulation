export function drawDistribution(results) {

    const ctx = document.getElementById("distributionChart");

    // Create histogram bins
    const bins = {};

    results.forEach(value => {
        const key = value.toFixed(1); // group by 0.1 (0.4, 0.5, etc.)
        bins[key] = (bins[key] || 0) + 1;
    });

    const labels = Object.keys(bins);
    const frequencies = Object.values(bins);

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Frequency of Probability",
                data: frequencies,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Probability of Heads"
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Frequency"
                    }
                }
            }
        }
    });

}

export function drawConvergence(history) {

    const ctx = document.getElementById("convergenceChart");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: history.map((_, i) => i + 1),
            datasets: [{
                label: "Running Probability of Heads",
                data: history,
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Flip Number"
                    }
                },
                y: {
                    min: 0,
                    max: 1,
                    title: {
                        display: true,
                        text: "Probability"
                    }
                }
            }
        }
    });

}