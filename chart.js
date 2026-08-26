const ctx = document.getElementById("rogueChart");

let currentChart;

function createRogueChart(hero1, hero2) {
  if (currentChart) {
    currentChart.destroy();
  }
  currentChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [hero1.hero, hero2.hero],
      datasets: [
        {
          label: "0p ST",
          data: [hero1.zeroP, hero2.zeroP],
        },

        {
          label: "4p ST",
          data: [hero1.fourP, hero2.fourP],
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
