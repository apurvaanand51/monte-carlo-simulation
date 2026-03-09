import { simulate, probabilityHistory, experimentResults } from "./simulation.js";
import { drawDistribution, drawConvergence } from "./visualization.js";

const result = simulate(100, 1000);
drawDistribution(experimentResults);
drawConvergence(probabilityHistory);
console.log(result);