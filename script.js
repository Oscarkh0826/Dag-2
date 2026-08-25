console.log("Hello World");

const outlawButton = document.getElementById("outlaw");

const heroChoicesDiv = document.getElementById("heroChoices");

outlawButton.addEventListener("click", function () {
  console.log("Outlaw button clicked!");

  const fatebound0p = 221698;
  const fatebound4p = 247243;

  heroChoicesDiv.innerHTML = `<h4>Fatebound</h4><h4>Trickster</h4>
  0p ST: ${fatebound0p}

  4p ST: ${fatebound4p}`;
});
