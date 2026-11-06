gsap.registerPlugin(ScrollTrigger);

let monthData = {
    labels: ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'],
    datasets: [{
        label: 'Stop Counts by Month', 
        data: [1468, 1304, 1407, 1544, 1647, 1254, 1439, 1368,1170,1734,1283,1353],
        fill: false,
        borderColor: ['rgb(255, 99, 132)'],
        tension: 0.1,
    }]
};
let titleConfig = {
    type: 'line',
    data: monthData,
    options: {
        animation: { duration: 2000 },
        responsive: true,
        scales: { y: { beginAtZero: true } },
    },
};

let titleCtx = document.getElementById("linechart2").getContext('2d');
let titleChart = null;

function reloadTitle(){
    titleChart.destroy()
    titleChart = new Chart(titleCtx, lineConfig)
}

function renderTitle() {
    if (!ctx) return;
    titleChart = new Chart(titleCtx, lineConfig);
}

renderTitle()
