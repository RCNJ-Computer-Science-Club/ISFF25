(() => {
  const loadIncludes = async () => {
    const includeNodes = document.querySelectorAll("[data-include]");
    if (!includeNodes.length) {
      return;
    }

    await Promise.all(
      Array.from(includeNodes).map(async (node) => {
        const path = node.getAttribute("data-include");
        if (!path) {
          return;
        }

        try {
          const response = await fetch(path);
          if (!response.ok) {
            throw new Error(`Failed to load ${path}`);
          }
          const html = await response.text();
          node.outerHTML = html;
        } catch (error) {
          console.error(error);
          node.remove();
        }
      })
    );
  };

  const initCountdown = () => {
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
  };

  const init = async () => {
    await loadIncludes();
    initCountdown();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    void init();
  }
})();
