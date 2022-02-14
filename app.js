

let clickUpgrades = {
  manure: {
    cost: 100,
    quantity: 0,
    multiplier: 30,
    purchased: false
  },
  water: {
    cost: 10,
    quantity: 0,
    multiplier: 5,
    purchased: false
  }
};

let autoUpgrades = {
  mose: {
    cost: 300,
    quantity: 0,
    multiplier: 50,
    purchased: false,
  },
  dwight: {
    cost: 1000,
    quantity: 0,
    multiplier: 100,
    purchased: false,
  }
};

let manureNum = clickUpgrades.manure.quantity *= clickUpgrades.manure.multiplier
let moseNum = autoUpgrades.mose.quantity
let waterNum = clickUpgrades.water.quantity
let schruteBucks = manureNum += moseNum += waterNum

function harvest() {
  if (clickUpgrades.manure.purchased == true) {
    schruteBucks += clickUpgrades.manure.multiplier
  }
  if (clickUpgrades.water.purchased == true) {
    schruteBucks += clickUpgrades.water.multiplier
  }
  else {
    schruteBucks++
  }
  drawStats()
  console.log("harvest manure purchased", clickUpgrades.purchased)
}

function autoHarvest() {
  if (autoUpgrades.mose.purchased == true) {
    schruteBucks += autoUpgrades.mose.multiplier
  }
  if (autoUpgrades.dwight.purchased == true)
    schruteBucks += autoUpgrades.dwight.multiplier

  else {
    schruteBucks++
  }
  drawStats()


  console.log("autoHarvest mose purchased", clickUpgrades.manure.purchased)
}

function drawBeets() {
  let template = ''
  template += `
  <img class="plot-img selectable" onclick="harvest()" src="/assets/images/beet-plot.jpeg">
  `
  document.getElementById('beetPlot').innerHTML = template
  console.log("drawBeets manure purchased", clickUpgrades.manure.purchased)
}

function drawStats() {
  let template = ''
  template += `
  <div class="col-md-4 p-2">
  <h2 class="m-2">Schrute Bucks: ${schruteBucks}</h2>
  <img class="icon" src="/assets/images/manure.png"> ${clickUpgrades.manure.quantity}
  <img class="mose-icon" src="/assets/images/mose.png"> ${autoUpgrades.mose.quantity}
  <img class="icon" src="/assets/images/waterCan.png"> ${clickUpgrades.water.quantity}
  <img class="dwight-icon" src="/assets/images/dwight.png"> ${autoUpgrades.dwight.quantity}
</div>
<div class="col-md-4 p-2">
<p><b>Click Upgrades:</b></p>
<button class="btn myBtn m-2" onclick="buyManure()">Apply Manure: $ ${clickUpgrades.manure.cost} Schrute Bucks</button>
    <img class="beet-icon" src="/assets/images/Beet.png"><b>x 
    ${clickUpgrades.manure.multiplier}</b>
<button class="btn myBtn m-2" onclick="waterBeets()">Water beets: $ ${clickUpgrades.water.cost} Schrute
  Bucks</button>
 <img class="beet-icon" src="/assets/images/Beet.png"><b>x ${clickUpgrades.water.multiplier}
  </b>
</div>
<div class="col-md-4 p-2">
  <p><b>Increase your rate of harvest!</b></p>
  <button class="btn myBtn m-2" onclick="hireMose()">Hire Cousin Mose: $${autoUpgrades.mose.cost} Schrute Bucks</button>
  <img class="beet-icon myBtn" src="/assets/images/Beet.png"><b>x ${autoUpgrades.mose.multiplier}
  </b>
  <button class="btn myBtn m-2" onclick="hireDwight()">Hire the Assistant to the Regional<p>Manager: $${autoUpgrades.dwight.cost} Schrute Bucks</p></button>
  <img class="beet-icon" src="/assets/images/Beet.png"><b>x ${autoUpgrades.dwight.multiplier}
  </b>
</div>

  `
  document.getElementById('stats').innerHTML = template
  console.log("drawStats manure purchased:", clickUpgrades.manure.purchased)
}

function buyManure() {
  let manure = clickUpgrades.manure

  if (!manure) { return console.log('Does Not Exist') }
  if (schruteBucks < manure.cost) { return console.log('Not enough Shrute Bucks') }

  manure.purchased = true
  schruteBucks -= manure.cost
  manure.quantity++
  manure.multiplier += manure.quantity
  manure.cost += manure.multiplier

  drawStats()
}

function waterBeets() {
  let water = clickUpgrades.water

  if (!water) { return console.log('Does Not Exist') }
  if (schruteBucks < water.cost) { return console.log('Not enough Shrute Bucks') }

  water.purchased = true
  schruteBucks -= water.cost
  water.quantity++
  water.multiplier += water.quantity
  water.cost += water.quantity * water.multiplier

  drawStats()
}

function hireMose() {
  let mose = autoUpgrades.mose
  if (!mose) { return console.log('Does Not Exist') }
  if (schruteBucks < mose.cost) { return console.log('Not enough Shrute Bucks') }

  mose.purchased = true
  schruteBucks -= mose.cost
  mose.quantity++
  mose.multiplier += mose.quantity
  mose.cost += mose.quantity * mose.multiplier
  drawStats()
  drawMose()
}

function drawMose() {
  let template = ''
  template += `
  
  <marquee behavior="alternate">
  <marquee behavior="alternate" direction="up">
    <img class="mose-icon" src="/assets/images/mose.png">
  </marquee>
</marquee>
 
  `
  document.getElementById('moseMarq').innerHTML = template
  setInterval(autoHarvest, 3000)
}

function hireDwight() {
  let dwight = autoUpgrades.dwight
  if (!dwight) { return console.log('Does Not Exist') }
  if (schruteBucks < dwight.cost) { return console.log('Not enough Shrute Bucks') }

  dwight.purchased = true
  schruteBucks -= dwight.cost
  dwight.quantity++
  dwight.multiplier += dwight.quantity
  dwight.cost += dwight.quantity * dwight.multiplier
  drawStats()
  drawDwight()
}

function drawDwight() {
  let template = ''
  template += `
  
  <marquee behavior="alternate">
  <marquee behavior="alternate" direction="down">
    <img class="dwight-icon" src="/assets/images/dwight.png">
  </marquee>
</marquee>
 
  `
  document.getElementById('dwightMarq').innerHTML = template
  setInterval(autoHarvest, 3000)
}

// TODO itterate over clickUpgrades (for in)
//        shruteBucks += upgrade.quantity * upgrade.multiplier
//   setInterval(collectAutoUpgrades, 2000)

function drawAll() {
  drawBeets()
  drawStats()
}

drawAll()
