console.log("Hello World");

let rogueData = [];

let fatebound;
let trickster;

fetch("data/rogue.csv")
  .then((response) => response.text())
  .then((data) => {
    const rows = data.trim().split("\n");

    const dataRows = rows.slice(1);

    rogueData = dataRows.map((row) => {
      const columns = row.split(",");

      return {
        hero: columns[0],
        zeroP: Number(columns[1]),
        fourP: Number(columns[2]),
      };
    });

    console.log(rogueData);

    fatebound = rogueData.find((row) => row.hero === "Fatebound");

    console.log(fatebound);

    trickster = rogueData.find((row) => row.hero === "Trickster");

    console.log(trickster);
  });

const outlawButton = document.getElementById("outlaw");

const heroChoicesDiv = document.getElementById("heroChoices");

const chartContainer = document.getElementById("chartContainer");

outlawButton.addEventListener("click", function () {
  chartContainer.style.display = "block";

  console.log("Outlaw button clicked!");

  if (!fatebound || !trickster) {
    console.log("CSV data not loaded yet. Please wait.");
    return;
  }

  createOutlawChart(fatebound, trickster);

  const fateboundGain =
    ((fatebound.fourP - fatebound.zeroP) / fatebound.zeroP) * 100;

  const tricksterGain =
    ((trickster.fourP - trickster.zeroP) / trickster.zeroP) * 100;

  heroChoicesDiv.innerHTML = `<h4>Fatebound</h4>
  0p ST: ${fatebound.zeroP}<br>
  4p ST: ${fatebound.fourP}<br>
  Gain: ${fateboundGain.toFixed(2)}%<br>

  <h4>Trickster</h4>
  0p ST: ${trickster.zeroP}<br>
  4p ST: ${trickster.fourP}<br>
  Gain: ${tricksterGain.toFixed(2)}%<br>
`;
});
