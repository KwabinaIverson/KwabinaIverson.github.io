// SIDEBART TOGGLE
let sidebarOpen = false
let sidebar = document.querySelector('.aside-container'); 

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive')
    sidebarOpen = true
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive')
    sidebarOpen = false
  }
}

// CHARTS

//BAR CHART
var barChartOptions = {
          series: [{
          data: [10, 8, 6, 4, 2]
        }],
          chart: {
          type: 'bar',
          height: 350,
          toolbar: {
            show: false
          },
          colors: [
            "#246dc",
            "#cc3c43",
            "#367952",
            "#fb5741",
            "#4f35al"
        ]
        },
        plotOptions: {
          bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: true,
            columnWidth: '40%'
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          enabled: false
        },
        xaxis: {
          title: {
            text: "Count"
          }
        },
        yaxis: {
          
          categories: [
            "Laptops", "Cars", "Printers", "Projectors", "Monitors"
          ]
        }
        };

        let barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
        barChart.render();


// AREA CHART
 var areaChartOption = {
          series: [{
          name: 'Purchase Orders',
          type: 'area',
          data: [31, 40, 28, 51, 42, 209, 100]
        }, {
          name: 'Sales Orders',
          type: 'line',
          data: [11, 32, 48, 51, 42, 67, 22]
        }],
          chart: {
          height: 350,
          type: 'area',
          toolbar: {
            show: false
          }
        },
        colors: ["#fbbf24", "#a3e635"],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        fill: {
          type:'solid',
          opacity: [0.35, 1],
        },
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        markers: {
          size: 0
        },
        yaxis: [
          {
            title: {
              text: 'Purchase Orders',
            },
          },
          {
            opposite: true,
            title: {
              text: 'Sales Orders',
            },
          },
        ],
        tooltip: {
          shared: true,
          intersect: false,
        }
        };

        var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOption);
        areaChart.render();
      
       