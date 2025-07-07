
var ops = operations.split("\n")

// Fills in matrix with actual data
// Adds up expenses by category for each month
for (var i=1;i<ops.length;i++) {
  op = ops[i].split(";")
  month = Number(op[0].substring(3,5))-1
  categ = op[1]
  amount = op[4]  
  if(op[4] != '') {    
    CFG_OPERATION_CUBE[month][CFG_CATEGORY_MAP[categ]]+= Math.round(amount)
  }  
}

// Adds event listener on buttons
window.addEventListener('load', 
  function () {
    
    // period button
    period_buttons = document
      .getElementsByClassName('period-item')
    for (var i=0; i < period_buttons.length; i++) {
        period_buttons[i]
          .addEventListener("click", 
          function(){ 
            this.style.backgroundColor = this
              .style
              .backgroundColor === "yellow" ? "green" : "yellow"
          }
        )
    }     
  }    
)

window.addEventListener('load', 
  function () {
    period_buttons = document.getElementsByClassName('month-year')
    for (let i=0; i < period_buttons.length; i++) {
        period_buttons[i].addEventListener("click", function () { 
            plotSankey(i)
          }
        )
    }     
  }    
)