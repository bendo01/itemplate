(function($) {
  "use strict";

  $(".data-attributes-donut span").peity("donut");
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

  var lineBarData = {
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
      data: [710, 800, 300, 560, 777, 999, 400],
    }]
  };

  var lineChartctx = document.getElementById('lineChart');
  var lineChart = new Chart(lineChartctx, {
    'type': 'line',
    'data': lineBarData
  });

  /* Start echart */
  var echartGaugeCPUChart = echarts.init(document.getElementById('echart_gauge_cpu'), 'macarons');
  var optionGaugeCPUChart = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    series: [{
      name: 'CPU',
      type: 'gauge',
      detail: {
        formatter: '{value}%',
        textStyle: {
          fontSize : 12
        }
      },
      data: [{
        value: 50,
        name: 'CPU'
      }]
    }]
  };

  clearInterval(gaugeCPUChart);
  var gaugeCPUChart = setInterval(function() {
    optionGaugeCPUChart.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    echartGaugeCPUChart.setOption(optionGaugeCPUChart, true);
  }, 2000);

  /* Start echart */
  var echartGaugeRAMChart = echarts.init(document.getElementById('echart_gauge_ram'), 'macarons');
  var optionGaugeRAMChart = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    series: [{
      name: 'RAM',
      type: 'gauge',
      detail: {
        formatter: '{value}%',
        textStyle: {
          fontSize : 12
        }
      },
      data: [{
        value: 50,
        name: 'RAM'
      }]
    }]
  };

  clearInterval(gaugeRAMChart);
  var gaugeRAMChart = setInterval(function() {
    optionGaugeRAMChart.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    echartGaugeRAMChart.setOption(optionGaugeRAMChart, true);
  }, 2000);

  /* Start echart */
  var echartGaugeDISKChart = echarts.init(document.getElementById('echart_gauge_disk'), 'macarons');
  var optionGaugeDISKChart = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    series: [{
      name: 'DISK',
      type: 'gauge',
      detail: {
        formatter: '{value}%',
        textStyle: {
          fontSize : 12
        }
      },
      data: [{
        value: 50,
        name: 'DISK'
      }]
    }]
  };

  clearInterval(gaugeDISKChart);
  var gaugeDISKChart = setInterval(function() {
    optionGaugeDISKChart.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    echartGaugeDISKChart.setOption(optionGaugeDISKChart, true);
  }, 2000);

}(jQuery));
