function animateChart(chart) {
    let phase = 0;

    function updateChart() {
        phase += 0.01;

        chart.data.datasets[0].data = chart.data.datasets[0].data.map((_, i) => {
            const wavelength = 300 + i;
            const gaussian1 = 0.8 * Math.exp(-Math.pow((wavelength - (450 + 10 * Math.sin(phase))) / 30, 2));
            const gaussian2 = 0.6 * Math.exp(-Math.pow((wavelength - (550 + 5 * Math.cos(phase * 0.7))) / 40, 2));
            const gaussian3 = 0.4 * Math.exp(-Math.pow((wavelength - (650 + 8 * Math.sin(phase * 1.3))) / 25, 2));
            return gaussian1 + gaussian2 + gaussian3 + (Math.random() * 0.05);
        });

        chart.update();
        requestAnimationFrame(updateChart);
    }

    updateChart();
}
