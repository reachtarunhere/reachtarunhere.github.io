(() => {
  const canvas = document.getElementById("random-walk");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const context = canvas.getContext("2d");
  const step = 5;
  const interval = 100;
  const initialSteps = 75;
  const edge = 12;
  let x;
  let y;
  let angle;
  let timer;

  const color = () =>
    getComputedStyle(document.documentElement).getPropertyValue("--blue").trim() || "#458588";

  function drawStep() {
    const { width, height } = canvas.getBoundingClientRect();
    const nextAngle = angle + (Math.random() - 0.5) * 1.25;
    let nextX = x + Math.cos(nextAngle) * step;
    let nextY = y + Math.sin(nextAngle) * step;

    if (nextX < edge || nextX > width - edge || nextY < edge || nextY > height - edge) {
      angle += Math.PI + (Math.random() - 0.5);
      return;
    }

    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(nextX, nextY);
    context.stroke();
    x = nextX;
    y = nextY;
    angle = nextAngle;
  }

  function reset() {
    const scale = Math.min(window.devicePixelRatio || 1, 2);
    const { width, height } = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(width * scale));
    canvas.height = Math.max(1, Math.floor(height * scale));
    context.setTransform(scale, 0, 0, scale, 0, 0);
    context.clearRect(0, 0, width, height);
    context.strokeStyle = color();
    context.globalAlpha = 0.72;
    context.lineWidth = 1.35;
    context.lineCap = "round";
    context.lineJoin = "round";
    x = width / 2;
    y = height / 2;
    angle = Math.random() * Math.PI * 2;

    for (let index = 0; index < initialSteps; index += 1) drawStep();
  }

  function start() {
    window.clearInterval(timer);
    reset();
    timer = window.setInterval(drawStep, interval);
  }

  start();
  window.addEventListener("resize", start, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.clearInterval(timer);
    } else {
      start();
    }
  });
})();
