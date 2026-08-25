const ctx = document.getElementById("outlawChart");

const outlawChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Fatebound", "Trickster"],
    datasets: [
      {
        label: "0p ST",
        data: [fatebound0p, trickster0p],
      },

      {
        label: "4p ST",
        data: [fatebound4p, trickster4p],
      },
    ],
  },
});
