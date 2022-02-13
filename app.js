

let clickUpgrades = {
  manure: {
    cost: 20,
    quantity: 0,
    multiplier: 4,
    purchased: false
  },
  water: {
    cost: 10,
    quantity: 0,
    multiplier: 2,
    purchased: false
  }
};

let autoUpgrades = {
  mose: {
    cost: 15,
    quantity: 0,
    multiplier: 20,
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
  if (autoUpgrades.mose.purchased = true) {
    schruteBucks += autoUpgrades.mose.multiplier
  }
  else {
    schruteBucks++
  }
  drawStats()


  console.log("autoHarvest mose purchased", clickUpgrades.manure.purchased)
}

function drawBeets() {
  let template = ''
  template += `
  <img class="plot-img selectable" onclick="harvest()" src="/assets/images/beet-plot.png">
  `
  document.getElementById('beetPlot').innerHTML = template
  document.getElementById('beetPlot2').innerHTML = template
  console.log("drawBeets manure purchased", clickUpgrades.manure.purchased)
}

function drawStats() {
  let template = ''
  template += `

  <div class="col-md-3">
  <p>
  <h1>Schrute Bucks: ${schruteBucks}</h1>
  </p>
  <img class="icon" src="/assets/images/manure.png"> ${clickUpgrades.manure.quantity}
  <img class="mose-img" src="/assets/images/mose.png"> ${autoUpgrades.mose.quantity}
  <img class="icon" src="/assets/images/waterCan.png"> ${clickUpgrades.water.quantity}
</div>

<div class="col-md-4">
  <b>Click Upgrades:</b>
  <p><button class="btn" onclick="buyManure()">Apply Manure: $ ${clickUpgrades.manure.cost} Schrute
      Bucks</button><span><img class"icon" scr="/assets/images/beet.png"> ${clickUpgrades.manure.multiplier}</span></p>
  <button class="btn" onclick="waterBeets()">Water beets: $ ${clickUpgrades.water.cost} Schrute Bucks</button>${clickUpgrades.water.multiplier}
</div>


<div class="col-md-3">
  <b>Increase your rate of harvest!</b>
  <button class="btn" onclick="hireShrute()">Hire Cousin Mose: $${autoUpgrades.mose.cost} Schrute Bucks</button>
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
  manure.multiplier++
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
  water.multiplier++
  water.cost += water.quantity * water.multiplier

  drawStats()
}

function hireShrute() {
  let mose = autoUpgrades.mose
  if (!mose) { return console.log('Does Not Exist') }
  if (schruteBucks < mose.cost) { return console.log('Not enough Shrute Bucks') }

  mose.purchased = true
  schruteBucks -= mose.cost
  mose.quantity++
  mose.multiplier * 2
  mose.cost += mose.quantity * mose.multiplier
  drawStats()
  drawMose()
}

function drawMose() {
  let template = ''
  template += `
  
  <marquee behavior="alternate">
  <marquee behavior="alternate" direction="up">
    <img class="mose-img" src="/assets/images/mose.png">
  </marquee>
</marquee>
 
  `
  document.getElementById('moseMarq').innerHTML = template
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
