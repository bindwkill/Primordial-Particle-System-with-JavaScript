function gradToRad(value) {
  return value * Math.PI / 180
}

function radToGrad(value) {
  let angle = (value * 180 / Math.PI)
  return (angle < 0) ? angle + 360 : angle
}

function getSignal(value) {
  return value / Math.abs(value) | 0
}

function randomSignal() {
  return (Math.random() > 0.5) ? 1 : -1
}

function rectEquation(x, x0, y0, m) {
  return Math.tan(m) * (x - x0) + y0
}