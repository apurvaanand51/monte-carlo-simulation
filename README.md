# MONTE CARLO SIMULATION

It is a way to visualize a large number of experiments in the form of graphs,histograms, line-chart, convergence graph which can latter be visualized to predict the future outcomes 

In this project we've tried to determine the probablity of getting heads in a coin flip. In this demonstration we've randomly flipped a coin 1,00,000 times in a batch of thousand experiments.

## Charts that are generated from the obtained data - 

 - Monte Carlo Distribution Chart - It shows the frequency of appearance of a probability in overall coin flips. And as we can see the frequency is often more around 0.5 which staisfies the theoretical estimation.

 - Convergance Chart - It shows that how the result stabalizes around 0.5 as the size of sample increases. According to Law of large numbers, as the input sample increases, output sample approaches the actual value.

 ## Methodology - 

 - Define the number of coin flips per experiment.
 - Define the number of experiments to run.
 - For each flip, generate a random number using Math.random().
 - If the number is less than 0.5, the outcome is considered Heads, otherwise Tails.
 - Track the number of heads and calculate the running probability after each flip.
 - Store the final probability of heads for each experiment.
 - Visualize the results using charts.

## System Architecture - 

### We have used plain JavaScript to build pure logic behind monte-carlo-simulation and chart.js for graphs and chart as tech stack in this project.

### Components -

#### Simulation Moduel (simulation.js) - 

- Core logic which is performing monte-carlo simulation.
- Uses a nested loop to generatee random flips.
- Stores experimental result in an array.

#### Visualization Module (visualization.js) - 

- Using chart.js we have demonstrated the data in form of charts and graphs.

##### It demonstrates two major dataset -
- Monte Carlo Distribution Chart - It depicts the frequency of appearance of a probability out of total outcomes.
- Convergance Chart - It depicts how the output stabalizes around actual value as the input increases.

#### Main Controller (main.js) -

- Handles user inputs.
- Triggers the simulation.
- Passes the results to the visualization module.

#### User Interface - 

- Built using HTML, CSS, and JavaScript.

### Algorithm - 

#### Step 1: Initalize Variables - 

````    
heads = 0
flipCount = 0
probabilityHistory = []
experimentResults = []
````

#### Step 2: Run Experiments - 

````
for experiment = 1 to totalExperiments
````

#### Step 3 - Perform Coin Flip - 

````
for flip = 1 to totalFlips
````
##### Generate Random Flip :
````
rand = Math.random()
````
##### If :
````
rand < 0.5 → Heads
rand ≥ 0.5 → Tails
````

#### Step 4 - Update Running Probability - 

##### After Each Flip :
````
runningProbability = heads / flipCount
````
##### Store It :
````
probabilityHistory.push(runningProbability)
````

#### Step 5 - Store Final Experiment Result - 

````
finalProbability = heads / totalFlips
experimentResults.push(finalProbability)
````

#### Step 6 - Visualise Result - 

- Convergence chart uses probabilityHistory
- Distribution chart uses experimentResults

## Results - 

### 1. Early Fluctuation -
#### At the beginning of the experiment, the probability of heads fluctuates significantly. This occurs because small sample sizes are highly sensitive to random variation.
````
First 5 flips
H T T H H
Probability = 3/5 = 0.6
````