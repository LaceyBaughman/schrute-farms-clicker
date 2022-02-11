const shrute = {
  produceCount: 0,
  bucks: 0,
}

let clickUpgrades = {
  manure: {
    price: 100,
    quantity: 0,
    multiplier: 1
  }
};

let automaticUpgrades = {
  cousinMose: {
    price: 600,
    quantity: 0,
    multiplier: 20
  }
};

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
  <div class="m-2 p-2 text-center">
  <h1>Beets Harvested: ${shrute.produceCount}</h1>
  <p>
  <h1>Shrute Bucks: ${shrute.bucks}</h1>
  </p>
</div>
  `

  document.getElementById('stats').innerHTML = template
}


function harvest() {
  shrute.produceCount++
  if (shrute.produceCount >= 100) {
    shrute.bucks += 20
    shrute.produce -= 100
  }


  drawStats()
}



function purchaseCompanion(companionName) {
  let companion = automaticUpgrades.cousinMose

  if (!companion) { return console.log('Does Not Exist') }
  if (shrute.bucks < companion.cost) { return console.log('Not enough Shrute Bucks') }
  if (companion.purchased) { return console.log('Already did that') }

  companion.purchased = true
  shrute.bucks -= companion.cost

  drawStats()
}


function drawAll() {
  drawBeets()
  drawStats()
}


drawAll()


