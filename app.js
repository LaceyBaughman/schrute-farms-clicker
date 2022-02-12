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
    price: 60,
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
  <button onclick="purchaseUpgrade()"><h3>Apply Manure</h3></button><p>
  <button onclick="purchaseCompanion()"><h3>Buy Cousin Mose for $60 Shrute Bucks</h3></button><p>
</div>
  `

  document.getElementById('stats').innerHTML = template
}


// function harvest() {
//   shrute.produceCount++
//   if (shrute.produceCount >= 10) {
//     shrute.produce -= 10
//     shrute.bucks += 50
//   }


function harvest() {
  shrute.bucks++
  collectClickUpgrades()
  // let mose = automaticUpgrades.cousinMose
  // if (mose.purchased) {

  // }
  // let manure = clickUpgrades.manure
  // if (manure.purchased) {
  //   shrute.bucks += 4
  // }
  drawStats()
}




function purchaseAutoUpgrade(Mose) {
  let mose = automaticUpgrades.cousinMose

  if (!mose) { return console.log('Does Not Exist') }
  if (shrute.bucks < mose.price) { return console.log('Not enough Shrute Bucks') }
  if (mose.purchased) { return console.log('Already did that') }

  mose.purchased = true
  shrute.bucks -= mose.cost

  drawStats()
}

function purchaseManureUpgrade() {
  let manure = clickUpgrades.manure
  if (!manure) { return console.log('Does Not Exist') }
  if (shrute.bucks < manure.price) { return console.log('Not enough Shrute Bucks') }
  // if (manure.purchased) { return console.log('Already did that') }

  // manure.purchased = true

  shrute.bucks -= manure.cost
  // increase quantity of manure
  // increase cost of manure

  drawStats()
}



function drawAll() {
  drawBeets()
  drawStats()
}


drawAll()

function collectClickUpgrades() {
  // TODO itterate over clickUpgrades (for in)
  //        shrute.bucks += upgrade.quantity * upgrade.multiplier
}
  //   setInterval(collectAutoUpgrades, 2000)


