const shrute = {
  level: 1,
  produceCount: 3,
}


function drawBeets() {
  let template = ''
  template += `
  <img onclick="harvest()" src="/assets/images/beet-plot.png">
  `
  document.getElementById('beetPlot').innerHTML = template
}

function drawStats() {
  let template = ''
  template += `
  <h1>${shrute.produceCount}</h1>
            <p>
            <h1>${shrute.level}</h1>
            </p>
  `
  document.getElementById('stats').innerHTML = template
  console.log('template', template)
}

function harvest() {
  shrute.produceCount++
  if (shrute.produceCount < 10) {
    shrute.level++
  }
  if (shrute.level > 3) {

  }
  console.log('harvsting', shrute.produceCount)

  drawStats()
}

//setInterval(shrute.produceCount++, 2000)

// function updateLevel() {
//   document.getElementById('stats').innerText = shrute.produceCount
// }

// function updateProduceCount() {
//   document.getElementById('stats').innerText = shrute.produceCount
// }

function drawAll() {
  drawBeets()
  drawStats()
  // updateProduceCount()
  // updateLevel()
}

drawAll()


