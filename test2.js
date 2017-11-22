//-----------------------------CHARTS
var ctx = document.getElementById('myChart').getContext('2d');

var options = {
  type: 'bar',
  data: {
    labels: newProductArray.map(function(x) {return x.name;}),
    datasets: [{
      label: '# of Votes',
      data: newProductArray.map(function(x) {return x.clicked;}),
      borderWidth: 1
      //backgroundColor: [],
    },
    ]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
};

var myChart = new Chart(ctx, options);
