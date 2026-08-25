console.log("Hello World");

const outlawButton = document.getElementById("outlaw");

const heroChoicesDiv = document.getElementById("heroChoices");

const chartContainer = document.getElementById("chartContainer");

const trickster0p = 229971;
const trickster4p = 260151;

const fatebound0p = 221698;
const fatebound4p = 247243;

outlawButton.addEventListener("click", function () {
  chartContainer.style.display = "block";
  console.log("Outlaw button clicked!");

  const fateboundGain = ((fatebound4p - fatebound0p) / fatebound0p) * 100;

  const tricksterGain = ((trickster4p - trickster0p) / trickster0p) * 100;

  heroChoicesDiv.innerHTML = `<h4>Fatebound</h4>
  0p ST: ${fatebound0p}<br>
  4p ST: ${fatebound4p}<br>
  Gain: ${fateboundGain.toFixed(2)}%<br>

  <h4>Trickster</h4>
  0p ST: ${trickster0p}<br>
  4p ST: ${trickster4p}<br>
  Gain: ${tricksterGain.toFixed(2)}%<br>

`;
});
