
var ops = operations.split("\n")

var category_map = {
  'Alimentation & restaurants'  : 0,
  'Achats & shopping'           : 1,
  'Loisirs'                     : 2,
  'Logement & charges'          : 3,
  'Sante'                       : 4,
  'Don'                         : 5,
  'Impôts, taxes & frais'       : 6,
  'Transports'                  : 7,
  'Voyages'                     : 8,
  'Epargne & placements'        : 9  
}

// Martix of month (Y axis) by Categories (X axis)
var ops_cube = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]

// Adds up expenses by category for each month
for (var i=1;i<ops.length;i++) {
  op = ops[i].split(";")
  month = Number(op[0].substring(3,5))-1
  categ = op[1]
  amount = op[4]  
  if(op[4] != '') {    
    ops_cube[month][category_map[categ]]+= Math.round(amount)
  }  
}

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
