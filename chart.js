const ctx = document.getElementById("outlawChart");

let outlawChart;

function createOutlawChart(fatebound, trickster) {
  if (outlawChart) {
    outlawChart.destroy();
  }
  outlawChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Fatebound", "Trickster"],
      datasets: [
        {
          label: "0p ST",
          data: [fatebound.zeroP, trickster.zeroP],
        },

        {
          label: "4p ST",
          data: [fatebound.fourP, trickster.fourP],
        },
      ],
    },
    options: {
      scales: {
        y: {
          ticks: {
            callback: function (value) {
              return value.toLocaleString(); // Format y-axis values with commas
            },
          },
        },
      },
    },
  });
}
