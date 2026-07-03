const button = document.querySelector("button");

button.addEventListener("click", () => {
    window.location.reload();
})

document.querySelector("#sourcecode").addEventListener("click", () => {
    window.location.assign("https://github.com/apurvaanand51/monte-carlo-simulation");
});