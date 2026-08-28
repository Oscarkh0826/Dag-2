console.log("God morgen chat");

let rogueData = [];

let assassinationData = [];

let subtletyData = [];

let fatebound;

let trickster;

let brewmasterData = [];

let windwalkerData = [];

function parseCSV(data) {
  const rows = data.trim().split("\n");
  const headers = rows[0].split(",");

  return rows.slice(1).map((row) => {
    const columns = row.split(",");
    return {
      hero: columns[0],
      zeroP: Number(columns[1]),
      fourP: Number(columns[2]),
    };
  });
}

const specs = {
  outlaw: {
    file: "data/rogue.csv",
    heroes: ["Fatebound", "Trickster"],
  },

  assassination: {
    file: "data/assassination.csv",
    heroes: ["Fatebound", "Deathstalker"],
  },

  subtlety: {
    file: "data/subtlety.csv",
    heroes: ["Trickster", "Deathstalker"],
  },

  windwalker: {
    file: "data/windwalker.csv",
    heroes: ["Conduit", "Shadopan"],
  },

  brewmaster: {
    file: "data/brewmaster.csv",
    heroes: ["Harmony", "Shadopan"],
  },
};

function loadSpec(specName) {
  const spec = specs[specName];

  return fetch(spec.file)
    .then((response) => response.text())
    .then((data) => {
      return parseCSV(data);
    });
}

loadSpec("outlaw").then((parsedRows) => {
  rogueData = parsedRows;

  fatebound = rogueData.find((row) => row.hero === specs.outlaw.heroes[0]);

  trickster = rogueData.find((row) => row.hero === specs.outlaw.heroes[1]);
});

loadSpec("assassination").then((parsedRows) => {
  assassinationData = parsedRows;
});

loadSpec("subtlety").then((parsedRows) => {
  subtletyData = parsedRows;
});

loadSpec("windwalker").then((parsedRows) => {
  windwalkerData = parsedRows;
});

loadSpec("brewmaster").then((parsedRows) => {
  brewmasterData = parsedRows;
});

const outlawButton = document.getElementById("outlaw");

const assassinationButton = document.getElementById("assassination");

const subtletyButton = document.getElementById("subtlety");

const windwalkerButton = document.getElementById("windwalker");

const brewmasterButton = document.getElementById("brewmaster");

const heroChoicesDiv = document.getElementById("heroChoices");

const chartContainer = document.getElementById("chartContainer");

subtletyButton.addEventListener("click", function () {
  chartContainer.style.display = "block";

  if (subtletyData.length === 0) {
    console.log("CSV data not loaded yet. Please wait.");
    return;
  }

  const subtletyTrickster = subtletyData.find(
    (row) => row.hero === specs.subtlety.heroes[0],
  );

  const subtletyTricksterGain =
    ((subtletyTrickster.fourP - subtletyTrickster.zeroP) /
      subtletyTrickster.zeroP) *
    100;

  const subtletyDeathstalker = subtletyData.find(
    (row) => row.hero === specs.subtlety.heroes[1],
  );

  const subtletyDeathstalkerGain =
    ((subtletyDeathstalker.fourP - subtletyDeathstalker.zeroP) /
      subtletyDeathstalker.zeroP) *
    100;

  createRogueChart(subtletyTrickster, subtletyDeathstalker);

  heroChoicesDiv.innerHTML = `<h4>Trickster</h4>
      0p ST: ${subtletyTrickster.zeroP}<br>
      4p ST: ${subtletyTrickster.fourP}<br>
      Gain: ${subtletyTricksterGain.toFixed(2)}%<br>

      <h4>Deathstalker</h4>
      0p ST: ${subtletyDeathstalker.zeroP}<br>
      4p ST: ${subtletyDeathstalker.fourP}<br>
      Gain: ${subtletyDeathstalkerGain.toFixed(2)}%<br>
    `;
});

assassinationButton.addEventListener("click", function () {
  chartContainer.style.display = "block";

  if (assassinationData.length === 0) {
    console.log("CSV data not loaded yet. Please wait.");
    return;
  }

  const assassinationFatebound = assassinationData.find(
    (row) => row.hero === specs.assassination.heroes[0],
  );

  const assassinationDeathstalker = assassinationData.find(
    (row) => row.hero === specs.assassination.heroes[1],
  );

  const fateboundGain =
    ((assassinationFatebound.fourP - assassinationFatebound.zeroP) /
      assassinationFatebound.zeroP) *
    100;

  const deathstalkerGain =
    ((assassinationDeathstalker.fourP - assassinationDeathstalker.zeroP) /
      assassinationDeathstalker.zeroP) *
    100;

  createRogueChart(assassinationFatebound, assassinationDeathstalker);

  heroChoicesDiv.innerHTML = `<h4>Fatebound</h4>
      0p ST: ${assassinationFatebound.zeroP}<br>
      4p ST: ${assassinationFatebound.fourP}<br>
      Gain: ${fateboundGain.toFixed(2)}%<br>

      <h4>Deathstalker</h4>
      0p ST: ${assassinationDeathstalker.zeroP}<br>
      4p ST: ${assassinationDeathstalker.fourP}<br>
      Gain: ${deathstalkerGain.toFixed(2)}%<br>
    `;
});

outlawButton.addEventListener("click", function () {
  chartContainer.style.display = "block";

  if (!fatebound || !trickster) {
    console.log("CSV data not loaded yet. Please wait.");
    return;
  }

  createRogueChart(fatebound, trickster);

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

windwalkerButton.addEventListener("click", function () {
  chartContainer.style.display = "block";

  if (windwalkerData.length === 0) {
    console.log("CSV data not loaded yet. Please wait.");
    return;
  }

  const windwalkerConduit = windwalkerData.find(
    (row) => row.hero === specs.windwalker.heroes[0],
  );

  const windwalkerConduitGain =
    ((windwalkerConduit.fourP - windwalkerConduit.zeroP) /
      windwalkerConduit.zeroP) *
    100;

  const windwalkerShadopan = windwalkerData.find(
    (row) => row.hero === specs.windwalker.heroes[1],
  );

  const windwalkerShadopanGain =
    ((windwalkerShadopan.fourP - windwalkerShadopan.zeroP) /
      windwalkerShadopan.zeroP) *
    100;

  createRogueChart(windwalkerConduit, windwalkerShadopan);

  heroChoicesDiv.innerHTML = `<h4>Conduit</h4>
      0p ST: ${windwalkerConduit.zeroP}<br>
      4p ST: ${windwalkerConduit.fourP}<br>
      Gain: ${windwalkerConduitGain.toFixed(2)}%<br>

      <h4>Shado-Pan</h4>
      0p ST: ${windwalkerShadopan.zeroP}<br>
      4p ST: ${windwalkerShadopan.fourP}<br>
      Gain: ${windwalkerShadopanGain.toFixed(2)}%<br>
    `;
});
