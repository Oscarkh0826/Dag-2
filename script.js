console.log("Hello World");

const outlawButton = document.getElementById("outlaw");

const heroChoicesDiv = document.getElementById("heroChoices");

outlawButton.addEventListener("click", function () {
  console.log("Outlaw button clicked!");

  heroChoicesDiv.innerHTML = "Test";
});
