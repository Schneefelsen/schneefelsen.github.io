if ('Accelerometer' in window) {
    const accelerometer = new Accelerometer({frequency: 60});

    accelerometer.addEventListener('reading', () => {
        document.getElementById('x').textContent = accelerometer.x.toFixed(2);
        document.getElementById('y').textContent = accelerometer.y.toFixed(2);
        document.getElementById('z').textContent = accelerometer.z.toFixed(2);
    });

    accelerometer.addEventListener('error', (event) => {
        if (event.error.name === 'NotAllowedError') {
            alert('Permission to access sensor was denied.');
        } else if (event.error.name === 'NotReadableError') {
            alert('Cannot connect to the sensor.');
        }
    });

    accelerometer.start();
} else {
    alert('Accelerometer is not supported by your browser.');
}
