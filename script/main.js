
function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

var ops = (getOperations(CFG_CURRENT_YEAR)).split("\n")
var assets = (getAssets(CFG_CURRENT_YEAR)).split("\n")

ready(function () {

  // Groups up assets by category for each month
  for (var i = 1; i < assets.length; i++) {
    asset = assets[i].split(";")
    month = Number(asset[0].substring(3, 5)) - 1
    categ = asset[1]
    amount = asset[5]
    CFG_ASSETS_CUBE[month][CFG_ASSET_CATEGORY_MAP[categ]] += Math.round(amount)
  }
  // Groups up expenses by category for each month
  for (var i = 1; i < ops.length; i++) {
    op = ops[i].split(";")
    month = Number(op[0].substring(3, 5)) - 1
    categ = op[1]
    amount = op[4]
    if (op[4] != '') {
      CFG_OPERATION_CUBE[month][CFG_CATEGORY_MAP[categ]] += Math.round(amount)
    }
  }

  var element = document.querySelector(".body1");
  if (element) { element.innerHTML = String(CFG_CURRENT_MONTH) + "/" + String(CFG_CURRENT_YEAR); }  
  
  // Adds functions on left side menu first element
  var element = document.getElementById('letf-menu-item1')
  if (element) { 
    element.addEventListener("click", function () {
      document.getElementById("sankey-chart").style.display = "inline"
      document.getElementById("linear-chart").style.display = "none"
      sankeychart = document.getElementById("sankey-chart")
      sankeychart.innerHtml = ""
      sankeychart.style.display = "inline"
    })
  }
  
  // Adds functions on left side menu secund element
  var element = document.getElementById('letf-menu-item2')
  if (element) {
    element.addEventListener("click", function () {
      document.getElementById("sankey-chart").style.display = "none"
      document.getElementById("linear-chart").style.display = "inline"    
    })
  }

  // Adds function on month buttons
  const divs = document.querySelectorAll('.month-year');
    divs.forEach((div, index) => {
      div.addEventListener('click', () => {
        console.log(`Div ${index + 1} clicked`);        
        EXPENSES_CHART.data.datasets[0].data = buildSankeyData(CFG_OPERATION_CUBE,index).data;
        EXPENSES_CHART.data.datasets[0].labels = buildSankeyData(CFG_OPERATION_CUBE,index).labels;
        EXPENSES_CHART.update();        
      });
    })
  
    // Adds function on period buttons (MTC, 1M, etc.)
  var element = document.getElementsByClassName('period-item')
  for (var i = 0; i < element.length; i++) {
    element[i].addEventListener("click", function () {
      this.style.backgroundColor = this
           .style.backgroundColor === "yellow" ? "green" : "yellow"
        }
      )
  }

  // Plots charts
  plotSankey(CFG_CURRENT_MONTH)
  plotLinear(CFG_CURRENT_MONTH)

  // Hides other divs after all charts are loaded.
  var element = document.getElementById('linear-chart')
  if (element) { element.style.display="none" }
})