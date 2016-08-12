(function($) {
  "use strict";
  $(".data-attributes span").peity("donut");
  $(".data-attributes-pie span").peity("pie");
  $(".data-attributes-bar span").peity("bar");
  $(".data-attributes-line span").peity("line");

  var chartBarData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "Month Sales",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    }]
  };
  var barChartctx = document.getElementById('barChart');
  var barChart = new Chart(barChartctx, {
    'type': 'bar',
    'data': chartBarData
  });

  var lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September"],
    datasets: [{
      label: "Sales Analytics",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#10c469",
      borderColor: "#10c469",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "#10c469",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#10c469",
      pointHoverBorderColor: "#eef0f2",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40, 35, 30]
    }]
  };

  var lineOpts = {
    scales: {
      yAxes: [{
        gridLines: {
          color: "rgba(255,255,255,0.05)"
        },
        ticks: {
          max: 100,
          min: 20,
          stepSize: 10
        }
      }],
      xAxes: [{
        gridLines: {
          color: "rgba(255,255,255,0.05)"
        }
      }]
    }
  };

  var lineChartctx = document.getElementById('lineChart');
  var lineChart = new Chart(lineChartctx, {
    'type': 'line',
    'data': lineChartData
  });

  var donutData = {
    datasets: [{
      data: [
        11,
        16,
        7,
        3
      ],
      backgroundColor: [
        "#FF6384",
        "#4BC0C0",
        "#FFCE56",
        "#E7E9ED",
        "#36A2EB"
      ],
      label: 'My dataset' // for legend
    }],
    labels: [
      "Desktop",
      "Server",
      "Tablet",
      "Mobile"
    ]
  };
  var doughnutChartctx = document.getElementById('doughnutChart');
  var doughnutChart = new Chart(doughnutChartctx, {
    'type': 'doughnut',
    'data': donutData
  });

  var polarData = {
    datasets: [{
      data: [
        11,
        16,
        7,
        3,
        14
      ],
      backgroundColor: [
        "#ff8acc",
        "#5b69bc",
        "#f9c851",
        "#E7E9ED",
        "#10c469"
      ],
      label: 'My dataset', // for legend
      hoverBorderColor: "#fff"
    }],
    labels: [
      "Series 1",
      "Series 2",
      "Series 3",
      "Series 4",
      "Series 5"
    ]
  };
  var polarChartctx = document.getElementById('polarChart');
  var polarChart = new Chart(polarChartctx, {
    'type': 'polarArea',
    'data': polarData
  });

  var radarData = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [{
      label: "My First dataset",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "rgba(179,181,198,1)",
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: [65, 59, 90, 81, 56, 55, 40]
    }, {
      label: "My Second dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      pointBackgroundColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255,99,132,1)",
      data: [28, 48, 40, 19, 96, 27, 100]
    }]
  };

  var radarChartctx = document.getElementById('radarChart');
  var radarChart = new Chart(radarChartctx, {
    'type': 'radar',
    'data': radarData
  });
}(jQuery));
