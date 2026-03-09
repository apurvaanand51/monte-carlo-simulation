export let probabilityHistory = [];
export let experimentResults = [];

export function simulate(totalFlip, totalExp) {

    probabilityHistory = [];
    experimentResults = [];

    for (let j = 1; j <= totalExp; j++) {

        let heads = 0;
        let history = [];

        for (let i = 1; i <= totalFlip; i++) {

            const flip = Math.random() < 0.5 ? 1 : 0;

            if (flip === 1) {
                heads++;
            }

            const runningProbability = heads / i;

            // Store history ONLY for the first experiment (for convergence chart)
            if (j === 1) {
                history.push(runningProbability);
            }

        }

        const finalProbability = heads / totalFlip;

        experimentResults.push(finalProbability);

        if (j === 1) {
            probabilityHistory = history;
        }

    }

    return experimentResults;
}