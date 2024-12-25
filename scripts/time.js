const currentTime = document.getElementById('current-time');


function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    currentTime.textContent = `Time: ${hours}:${minutes}:${seconds}`;
}
l
setInterval(updateTime, 1000);

updateTime();