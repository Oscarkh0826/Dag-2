console.log("Hello World");

const outlawButton = document.getElementById("outlaw");

const heroChoicesDiv = document.getElementById("heroChoices");

outlawButton.addEventListener("click", function () {
  console.log("Outlaw button clicked!");

  const fatebound0p = 221698;
  const fatebound4p = 247243;
const fateboundgain = ((fatebound4p - fatebound0p) / fatebound0p) * 100;

  const trickster0p = 229971;
  const trickster4p = 260151;

  heroChoicesDiv.innerHTML = `<h4>Fatebound</h4>
  0p ST: ${fatebound0p}<br>
  4p ST: ${fatebound4p}<br>
  Gain: ${fateboundgain.toFixed(2)}%<br>

  <h4>Trickster</h4>
  0p ST: ${trickster0p}<br>
  4p ST: ${trickster4p}

`;
});
