(() => {
  const canvas = document.getElementById("random-walk");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const context = canvas.getContext("2d");
  const step = 4;
  const interval = 160;
  let x;
  let y;
  let timer;

  const color = () => getComputedStyle(document.documentElement).getPropertyValue("--blue").trim() || "#458588";

  function reset() {
    const scale = Math.min(window.devicePixelRatio || 1, 2);
    const { width, height } = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(width * scale));
    canvas.height = Math.max(1, Math.floor(height * scale));
    context.setTransform(scale, 0, 0, scale, 0, 0);
    context.clearRect(0, 0, width, height);
    context.strokeStyle = color();
    context.globalAlpha = 0.65;
    context.lineWidth = 1.25;
    context.lineCap = "round";
    x = width / 2;
    y = height / 2;
  }

  function walk() {
    const { width, height } = canvas.getBoundingClientRect();
    const direction = Math.floor(Math.random() * 4);
    const nextX = Math.max(0, Math.min(width, x + (direction === 0 ? step : direction === 1 ? -step : 0)));
    const nextY = Math.max(0, Math.min(height, y + (direction === 2 ? step : direction === 3 ? -step : 0)));

    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(nextX, nextY);
    context.stroke();
    x = nextX;
    y = nextY;

    if (x === 0 || x === width || y === 0 || y === height) reset();
  }

  reset();
  timer = window.setInterval(walk, interval);
  window.addEventListener("resize", reset, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.clearInterval(timer);
    } else {
      reset();
      timer = window.setInterval(walk, interval);
    }
  });
})();
