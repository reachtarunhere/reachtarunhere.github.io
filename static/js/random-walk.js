(() => {
  const walk = document.getElementById("random-walk");
  if (!walk) return;

  const trail = walk.querySelector(".random-walk-trail");
  const point = walk.querySelector(".random-walk-point");
  const width = 800;
  const height = 96;
  const padding = 12;
  const step = 9;
  const maxPoints = 90;
  const initialPoints = 42;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let x = width / 2;
  let y = height / 2;
  let angle = Math.random() * Math.PI * 2;
  let points = [];
  let timer;

  function nextPoint() {
    angle += (Math.random() - 0.5) * 0.9;
    let nextX = x + Math.cos(angle) * step;
    let nextY = y + Math.sin(angle) * step;

    if (nextX < padding || nextX > width - padding || nextY < padding || nextY > height - padding) {
      angle += Math.PI + (Math.random() - 0.5);
      nextX = x + Math.cos(angle) * step;
      nextY = y + Math.sin(angle) * step;
    }

    x = Math.max(padding, Math.min(width - padding, nextX));
    y = Math.max(padding, Math.min(height - padding, nextY));
    points.push([x, y]);
    if (points.length > maxPoints) points.shift();
  }

  function render() {
    trail.setAttribute("points", points.map(([px, py]) => `${px.toFixed(1)},${py.toFixed(1)}`).join(" "));
    point.setAttribute("cx", x.toFixed(1));
    point.setAttribute("cy", y.toFixed(1));
  }

  function reset() {
    x = width / 2;
    y = height / 2;
    angle = Math.random() * Math.PI * 2;
    points = [[x, y]];
    for (let index = 0; index < initialPoints; index += 1) nextPoint();
    render();
  }

  function start() {
    window.clearInterval(timer);
    reset();
    if (!reducedMotion) timer = window.setInterval(() => {
      nextPoint();
      render();
    }, 120);
  }

  start();
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) window.clearInterval(timer);
    else start();
  });
})();
