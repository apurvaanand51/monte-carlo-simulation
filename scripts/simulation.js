export let probabilityHistory = [];
export let experimentResults = [];

export function simulate(totalFlip, totalExp) {
    for (let j = 1; j <= totalExp; j++) {
        let head = 0;
        let tail = 0;
        let flipCount = 0;

        for (let i = 1; i <= totalFlip; i++) {
            flipCount++;
            let rand = Math.random();
            if (rand < 0.5) {
                // console.log("HEAD");
                head++;
            } else if (rand >= 0.5) {
                // console.log("TAIL");
                tail++;
            }
            let liveProbability = head / flipCount;
            probabilityHistory.push(liveProbability);
            // console.log("Current Probability: " + liveProbability);
        }

        let probability = head / totalFlip;
        experimentResults.push(probability);

        // console.log("Total Flips: " + totalFlip);
        // console.log("Heads: " + head);
        // console.log("Tails: " + tail);
        // console.log("Probability: " + probability);
        // console.log("Probability History: " + JSON.stringify(probabilityHistory));
    }
    // console.log(experimentResults);
    return experimentResults;
}