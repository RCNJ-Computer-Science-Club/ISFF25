(() => {
  const countdown = document.getElementById("countdown");
  if (!countdown) {
    return;
  }

  const countDownDate = new Date("April 25, 2025 10:30:00").getTime();
  let timerId;

  const updateCountdown = () => {
    const now = Date.now();
    const distance = countDownDate - now;

    if (distance <= 0) {
      countdown.textContent = "🎉 The Festival Has Started!";
      if (timerId) {
        clearInterval(timerId);
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.textContent = `🎉 Kick off in ${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  updateCountdown();
  timerId = setInterval(updateCountdown, 1000);
})();
