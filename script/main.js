
var ops = (getOperations(CFG_CURRENT_YEAR)).split("\n")
var assets = (getAssets(CFG_CURRENT_YEAR)).split("\n")

// Adds up expenses by category for each month
for (var i = 1; i < ops.length; i++) {
  op = ops[i].split(";")
  month = Number(op[0].substring(3, 5)) - 1
  categ = op[1]
  amount = op[4]
  if (op[4] != '') {
    CFG_OPERATION_CUBE[month][CFG_CATEGORY_MAP[categ]] += Math.round(amount)
  }
}

// Adds up assets by category for each month
for (var i = 1; i < assets.length; i++) {
  asset = assets[i].split(";")
  month = Number(asset[0].substring(3, 5)) - 1
  categ = asset[1]
  amount = asset[5]
  CFG_ASSETS_CUBE[month][CFG_ASSET_CATEGORY_MAP[categ]] += Math.round(amount)
}

window.addEventListener('load',
  function () {
    // Adds functions on month filters
    period_buttons = document
      .getElementsByClassName('period-item')
    for (var i = 0; i < period_buttons.length; i++) {
      period_buttons[i]
        .addEventListener("click",
          function () {
            this.style.backgroundColor = this
              .style.backgroundColor === "yellow" ? "green" : "yellow"
          }
        )
    }
 
    const divs = document.querySelectorAll('.month-year');
    divs.forEach((div, index) => {
      div.addEventListener('click', () => {
        console.log(`Div ${index + 1} clicked`);
        plotSankey(index);
      });
    });   

// Adds functions on left side menu
document.getElementById('letf-menu-item1')
  .addEventListener("click", function () {
    document.getElementById("sankey-chart").style.display = "inline"
    document.getElementById("linear-chart").style.display = "none"
    sankeychart = document.getElementById("sankey-chart")
    sankeychart.innerHtml = ""
    sankeychart.style.display = "inline"
  })

document.getElementById('letf-menu-item2')
  .addEventListener("click", function () {
    document.getElementById("sankey-chart").style.display = "none"
    document.getElementById("linear-chart").style.display = "inline"
    plotLinear(CFG_CURRENT_MONTH)
  })
  }
)

function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(function () {
  const element = document.querySelector(".body1");
  if (element) {
    element.innerHTML = String(CFG_CURRENT_MONTH) + "/" + String(CFG_CURRENT_YEAR);
  }
});