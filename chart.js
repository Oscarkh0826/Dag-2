const ctx = document.getElementById("outlawChart");

let outlawChart;

function createOutlawChart() {
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
          data: [fatebound0p, trickster0p],
        },

        {
          label: "4p ST",
          data: [fatebound4p, trickster4p],
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
