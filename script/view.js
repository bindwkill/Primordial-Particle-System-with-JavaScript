const canvas = document.getElementById("render")
const canvasContext = canvas.getContext("2d");

const green = '#009922'
const blue = '#004499'
const brown = '#884433'
const magenta = '#992288'
const yellow = '#999922'

let lastScale = 7
let scale = lastScale
let particleSize = 1
let maxWidth = canvas.width / scale
let maxHeight = canvas.height / scale
canvasContext.scale(scale, scale)


//Retorna um codigo hexa de cor de acordo com o valor recebido
const getColor = function (value, nears) {
  /* set color green
    if ((n > 35))[set color yellow ]
    if (n > 15 and n <= 35)[set color blue ]
    if ((n = 14 or n = 15 or n = 13)) [set color brown]
    if (count turtles in-radius 1.3) > 15 [set color magenta]
  */
  let color = green
  if (value > 35) color = yellow
  if (value > 15 && value <= 35) color = blue
  if (value <= 15 && value >= 13) color = brown
  if (nears > 15) color = magenta
  return color
}

//atalho para alterar a escala do canvas
const setScale = value => {
  lastScale = scale
  scale = value
  maxWidth = canvas.width / value
  maxHeight = canvas.height / value
  canvasContext.scale(value / lastScale, value / lastScale)
}

const clearCanvas = function () {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height)
}

//exibe particulas na tela
const showParticles = function () {
  canvasContext.clearRect(0, 0, maxWidth, maxHeight)

  particles.forEach((item) => {
    let xCoord = item.xPosition
    let yCoord = item.yPosition
    let rad = particleSize
    let color = getColor(item.getNeighborhoods(), item.nearNeighborhoods)

    //pinta o circulo
    canvasContext.fillStyle = color
    canvasContext.beginPath()
    canvasContext.arc(xCoord, yCoord, rad, 0, 2 * Math.PI)
    canvasContext.fill()

    //desenha a borda do circulo e o tracinho de orientação
    /*
    let angle = item.orientation
    let endLineX = (xCoord - rad * Math.cos(angle))
    let endLineY = (yCoord + rad * Math.sin(angle))
    canvasContext.fillStyle = 'gray'
    canvasContext.beginPath()
    canvasContext.arc(xCoord, yCoord, rad, 0, 2 * Math.PI)
    canvasContext.moveTo(xCoord, yCoord)
    canvasContext.lineTo(endLineX, endLineY)
    canvasContext.stroke()
    */
  })
}

