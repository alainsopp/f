window.addEventListener('load', 
  function () {
    period_buttons = document.getElementsByClassName('period-item')
    for (var i=0; i < period_buttons.length; i++){
      period_buttons[i].addEventListener("click", 
        function(){ 
          this.style.backgroundColor = this.style.backgroundColor === "yellow" ? "green" : "yellow"
        }
      )
    } 
  }
)