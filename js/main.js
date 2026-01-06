
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
  document.getElementById("left-menu").innerHTML = window.leftMenu  
  document.getElementById("app-logo").innerHTML = window.appLogo  
  let cd = document.getElementsByClassName("chevron-down")  
  for(var i=0;i<cd.length;i++) { cd[i].innerHTML = window.chevron_d }  
  document.getElementById("data-years").innerHTML = window.yearsDropdown  
  cubifyData() // Formats data as a cube
  var item1 = document.getElementById('letf-menu-item1')
  var item2 = document.getElementById('letf-menu-item2')
  
  // Adds functions on left side menu fi  rst element
  if (item1) { 
    item1.addEventListener("click", function () {
      document.getElementById("sankey-chart").style.display = "flex"
      document.getElementById("linear-chart").style.display = "none"
      document.getElementById("allocation-chart").style.display = "none"
      item1.classList.add("left-menu-item-selected")
      item2.classList.remove("left-menu-item-selected")
    })
  }
  
  // Adds functions on left side menu secund element  
  if (item2) {
    item2.addEventListener("click", function () {
      document.getElementById("sankey-chart").style.display = "none"
      document.getElementById("linear-chart").style.display = "flex"
      document.getElementById("allocation-chart").style.display = "flex"
      item2.classList.add("left-menu-item-selected")
      item1.classList.remove("left-menu-item-selected")
    })
  }

  // Adds function on month buttons
  var divs = document.querySelectorAll('.month-year');
  divs.forEach((div, index) => {
    div.addEventListener('click', () => {      
      var sankeyData = buildSankeyData(CFG_OPERATION_CUBE,CFG_INCOMES_PER_MONTH[index],index)
      EXPENSES_CHART.data.datasets[0].data = sankeyData.data;
      EXPENSES_CHART.data.datasets[0].labels = sankeyData.labels;
      EXPENSES_CHART.update();        
    });
  })
  
  // Adds function on year buttons
  var li = document.querySelectorAll('.year-list-item');
  li.forEach((li, index) => {
    li.addEventListener('click', function(event) {
      t = event.target                  
      console.log(`Target innerHTML ${t.innerHTML} clicked`);
      CFG_CURRENT_YEAR = parseInt(t.innerHTML)
      cubifyData()
      var sankeyData = buildSankeyData(CFG_OPERATION_CUBE,CFG_INCOMES_PER_MONTH[index],index)
      EXPENSES_CHART.data.datasets[0].data = sankeyData.data;
      EXPENSES_CHART.data.datasets[0].labels = sankeyData.labels;
      EXPENSES_CHART.update();        
    });
  })

  // period = all
  //var element = document.getElementById('all')  
  //element.addEventListener("click", function () {           
  //})  

  // Plots charts
  plotSankey(CFG_CURRENT_MONTH)
  plotLinear('rgb(20, 97, 127)')
  plotDoughnut()

  // Hides other divs after all charts are loaded.
  document.getElementById('linear-chart').style.display="none"  
  document.getElementById('allocation-chart').style.display="none"
})