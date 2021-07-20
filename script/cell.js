const multiply = 2
const velocity = (0.67 * multiply)
const rotation = gradToRad(180)
const rotVariation = gradToRad(17)
const radius = (5 * multiply)
const rad180 = gradToRad(180)
const rad360 = gradToRad(360)
const nearsMultiply = 0.25

function createParticle(xPos, yPos, ori) {
  let particle = {
    xPosition: xPos,
    yPosition: yPos,
    orientation: gradToRad(ori),

    leftNeighbor: 0,
    rightNeighbor: 0,
    nearNeighborhoods: 0,

    setNeighborhoods(leftNei, rightNei, nearNei) {
      this.leftNeighbor = leftNei
      this.rightNeighbor = rightNei
      this.nearNeighborhoods = nearNei
    },

    getNeighborhoods() {
      return this.leftNeighbor + this.rightNeighbor
    },

    calcOrientation() {
      let rightNei = this.rightNeighbor
      let leftNei = this.leftNeighbor
      let totalNeighborhoods = this.getNeighborhoods()
      let radian = this.orientation
      /*
      if (rightNei > leftNei) radian += rotation + (totalNeighborhoods * rotVariation * 1)
      else if (rightNei < leftNei) radian += rotation + (totalNeighborhoods * rotVariation * -1)
      else radian += rotation
      */
      radian += rotation + (totalNeighborhoods * rotVariation * getSignal(rightNei - leftNei))
      this.orientation = radian % (Math.PI * 2)
    },

    calcPosition(maxX, maxY) {
      let radian = this.orientation
      const oldX = this.xPosition
      const oldY = this.yPosition
      const cos = Math.cos(radian)
      const sin = Math.sin(radian)

      let newX = oldX + velocity * cos
      newX = (newX < 0 || newX > maxX) ? oldX - velocity * cos : newX
      this.xPosition = newX

      let newY = oldY + velocity * sin
      newY = (newY < 0 || newY > maxY) ? oldY - velocity * sin : newY
      this.yPosition = newY
    },

    calcNeighborhoods(particlesArray = [], indice = 0) {
      let leftNei = 0
      let rightNei = 0
      let nears = 0

      const arrayIteration = (particle, index) => {
        if (index === indice) return
        // ângulo entre a reta entre as partículas e o sistema de referencia
        const [x0, y0] = [this.xPosition, this.yPosition]
        const [x1, y1] = [particle.xPosition, particle.yPosition]

        const deltaX = x1 - x0
        const deltaY = y1 - y0
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2)

        const angle = this.orientation
        //const angularCoefficient = Math.atan(deltaY / deltaX)

        if (distance > radius) return
        if (distance < radius * nearsMultiply) nears++

        const yr = rectEquation(x1, x0, y0, angle)//reta formada pela orientação do ponto A
        //const yp = rectEquation(x1, x0, y0, angularCoefficient)//reta formada pelos pontos A e B

        if (Math.cos(angle) <= 0) {
          //à direita do plano
          if (y1 >= yr) {
            //Acima da reta yr no plano
            leftNei++
          }
          else {
            rightNei++
          }
        }
        else {
          if (y1 >= yr) {
            //Acima da reta yr no plano
            rightNei++
          }
          else {
            leftNei++
          }
        }
      }

      particlesArray.forEach(arrayIteration)
      this.setNeighborhoods(leftNei, rightNei, nears)
      this.calcOrientation()
    },

    sayHello() {
      console.log(`I'm at <${this.xPosition},${this.yPosition}> coordinates and angle of ${this.orientation}°
      I have ${this.leftNeighbor} left neighborhoods and ${this.rightNeighbor} right neighborhoods`)
    }
  }
  return particle
}