
var ops = operations.split("\n")

// Fills in matrix with actual data
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

// Adds event listener on buttons
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
    // Adds functions on period filters (MTD, 1M, YTD, etc.)
    period_buttons = document.getElementsByClassName('month-year')
    for (var i = 0; i < period_buttons.length; i++) {
      period_buttons[i].addEventListener("click", 
        function () {
          plotSankey(i)
      })
    }
    // Adds functions on left side menu
    document.getElementById('letf-menu-item1')
      .addEventListener("click", function () {        
        document.getElementById("linear-chart").style.display = "none"
        sankeychart = document.getElementById("sankey-chart")
        sankeychart.innerHtml = ""        
        sankeychart.style.display = "inline"
        
        //plotSankey(CFG_CURRENT_MONTH)
      })
    document.getElementById('letf-menu-item2')
      .addEventListener("click", function () {        
        document.getElementById("sankey-chart").style.display = "none"
        document.getElementById("linear-chart").style.display = "inline"
        plotLinear(CFG_CURRENT_MONTH)
      })
  }
)