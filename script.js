document.addEventListener('DOMContentLoaded', function() {
    let progressBar = document.getElementById('progress-bar');
    let width = 0;
    let target = 70; // Target progress percentage

    function updateProgress() {
        if (width >= target) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressBar.textContent = width + '%';
        }
    }

    let interval = setInterval(updateProgress, 20); // Adjust the interval time for speed
});
