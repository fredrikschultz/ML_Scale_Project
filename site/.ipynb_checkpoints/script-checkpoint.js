fetch("data/predictions.csv")
  .then(res => res.text())
  .then(text => {
    const rows = text.trim().split("\n").map(r => r.split(","));
    const headers = rows[0];
    const data = rows.slice(1);

    const dates = data.map(r => r[0]);
    const predictions = data.map(r => parseFloat(r[1]));

    const ctx = document.getElementById("predictionChart");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: dates,
        datasets: [{
          label: "Prediction",
          data: predictions,
          borderWidth: 2,
          tension: 0.2
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: { display: true, text: "Date" }
          },
          y: {
            title: { display: true, text: "Prediction value" }
          }
        }
      }
    });
  });
