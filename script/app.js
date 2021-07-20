let particles = []
let maxParticles = 550
let Execution
let interval = 10

for (let i = 0; i < maxParticles; i++) {
  let x = Math.round(Math.random() * maxWidth)
  let y = Math.round(Math.random() * maxHeight)
  let angle = Math.round(Math.random() * 360)
  particles.push(createParticle(x, y, angle))
}

const iteration = function () {
  particles.forEach((item, index, array) => {
    item.calcNeighborhoods(array, index)
    item.calcPosition(maxWidth, maxHeight)
  })
  showParticles()
}

const rebuild = function () {
  particles = []
  for (let i = 0; i < maxParticles; i++) {
    let x = Math.round(Math.random() * maxWidth)
    let y = Math.round(Math.random() * maxHeight)
    let angle = Math.round(Math.random() * 360)
    particles.push(createParticle(x, y, angle))
  }
}

const rebuildAt = function (refx, refy) {
  particles = []
  for (let i = 0; i < maxParticles; i++) {
    let x = refx //+ Math.random()// * maxParticles * randomSignal()
    let y = refy //+ Math.random()// * maxParticles * randomSignal()
    let angle = Math.round(Math.random() * 360)
    particles.push(createParticle(x, y, angle))
  }
}

const rebuildAtCenter = function () {
  rebuildAt(maxWidth / 2, maxHeight / 2)
}

const reset = function () {
  stop()
  clearCanvas()
  maxParticles = document.getElementById("maxParticles").value
  if (isNaN(maxParticles)) {
    maxParticles = 550
    document.getElementById("maxParticles").value = 550
  }

  let scale = document.getElementById("scale").value
  if (isNaN(scale)) {
    scale = 7
    document.getElementById("scale").value = 7
  }

  interval = document.getElementById("time").value
  if (isNaN(interval)) {
    interval = 10
    document.getElementById("time").value = 10
  }

  setScale(scale)
  rebuild()
}

const start = function () {
  if (!Execution)
    Execution = setInterval(iteration, interval)
}
const stop = function () {
  clearInterval(Execution)
  Execution = null
}