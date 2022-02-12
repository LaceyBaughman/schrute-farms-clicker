

let clickUpgrades = {
  manure: {
    cost: 10,
    quantity: 0,
    multiplier: 1,
    purchased: false
  }
};

let autoUpgrades = {
  mose: {
    cost: 15,
    quantity: 0,
    multiplier: 20,
    purchased: false
  }
};

let shruteBucks = clickUpgrades += autoUpgrades

function drawBeets() {
  let template = ''
  template += `
  <img class="beet-plot selectable" onclick="harvest()" src="/assets/images/beet-plot.png">
  `
  document.getElementById('beetPlot').innerHTML = template
}

function drawStats() {
  let template = ''
  template += `
  
  <p><h1>Shrute Bucks: ${shruteBucks}</h1></p>
  <p><h3>Bags of Manure Applied: ${clickUpgrades.manure.quantity}</h1></p>
  <p><button class="btn" onclick="buyManure()"><h3>Apply Manure for<p>$${clickUpgrades.manure.cost} Shrute Bucks</p></h3></button></p>
  <p><button class="btn" onclick="hireShrute()"><h3>Hire Cousin Mose for<p>$${autoUpgrades.mose.cost} Shrute Bucks</p></h3></button></p>

  `
  document.getElementById('stats').innerHTML = template
}

function harvest() {
  let manure = clickUpgrades.manure.quantity * clickUpgrades.manure.multiplier
  let mose = autoUpgrades.mose.multiplier * autoUpgrades.mose.quantity
  shruteBucks += manure + mose
  shruteBucks++

  drawStats()
}

function buyManure() {
  let manure = clickUpgrades.manure

  if (!manure) { return console.log('Does Not Exist') }
  if (shruteBucks < manure.cost) { return console.log('Not enough Shrute Bucks') }

  manure.purchased = true
  shruteBucks -= manure.cost
  manure.quantity++
  manure.multiplier++
  manure.cost += manure.quantity * manure.multiplier

  drawStats()
}
// increase quantity of manure
// increase cost of manure

function hireShrute() {
  let mose = autoUpgrades.mose
  if (!mose) { return console.log('Does Not Exist') }
  if (shruteBucks < mose.cost) { return console.log('Not enough Shrute Bucks') }

  mose.purchased = true
  shruteBucks -= mose.cost
  mose.quantity++
  mose.multiplier * 2
  mose.cost += mose.quantity * mose.multiplier
  drawStats()
}

function autoHarvest() {
  let moseQ = clickUpgrades.mose.quantity
  let moseM = clickUpgrades.manure.multiplier
  if (autoUpgrades.mose.purchased = true) {
    shruteBucks += moseQ * moseM
    shruteBucks++
  }
  drawStats
}

// TODO itterate over clickUpgrades (for in)
//        shruteBucks += upgrade.quantity * upgrade.multiplier

//   setInterval(collectAutoUpgrades, 2000)

function drawAll() {
  drawBeets()
  drawStats()
}

setInterval(harvest, 3000)


drawAll()
