function clearData () {
  CFG_NB_OP_CATEGORIES = Object.keys(CFG_CATEGORY_MAP).length
  CFG_NB_AS_CATEGORIES = Object.keys(CFG_ASSET_CATEGORY_MAP).length
  CFG_NB_INC_CATEGORIES = Object.keys(CFG_INCOME_CATEGORY_MAP).length
  CFG_OPERATION_CUBE =  
Array.from({ length: CFG_NB_YEARS }, () => // Years
  Array.from({ length: 12 }, () =>  // Months
    Array.from({ length: CFG_NB_OP_CATEGORIES }, () => 0))) // Categories)  
  CFG_ASSETS_CUBE = Array(CFG_NB_YEARS).fill(Array(CFG_NB_YEARS*12).fill(Array(CFG_NB_AS_CATEGORIES).fill(0))) 
  CFG_INCOMES_PER_MONTH = Array(CFG_NB_YEARS*12).fill(0)
}

function cubifyAssets () {
  const request = indexedDB.open(CFG_DB_NAME, 2)
  request.onupgradeneeded = function (event) { const db = event.target.result }
  request.onsuccess = function (event) {
    const db = event.target.result;
    const tx = db.transaction(CFG_DB_STORE_ASSETS,"readonly")
    const store = tx.objectStore(CFG_DB_STORE_ASSETS)
    const allReq = store.getAll()
    allReq.onsuccess = function () { console.log("All records: ",allReq.result)}
    allReq.onerror = function () { console.error("Error reading all records")}}

  //for (var i = 1; i < assets.length; i++){// Groups up assets by category for each month
  //  asset = assets[i].split(";")
  //  month = Number(asset[0].substring(3, 5)) - 1
  //  categ = asset[1]
  //  amount = asset[5]
  //  CFG_ASSETS_CUBE[month][CFG_ASSET_CATEGORY_MAP[categ]] += Math.round(amount)}
}

function dataPeriodRange (operations) { // Returns a sorted key value pair object (ex.: {2000:0,2001:1,2003:2})
  var yearsSet = new Set()  
  for (var i = 0; i <= operations.length-1; i++) {
    let year = Number(operations[i]['date'].substring(6, 10))
    yearsSet.add(year)}
  var arrayYears = ([...yearsSet]).sort((a, b) => a - b)
      arrayYears = arrayYears.reduce((acc, year, index) => {
        acc[year] = index; return acc; }, {});
  return arrayYears}

function cubifyOperations () {
  const request = indexedDB.open(CFG_DB_NAME, 2)
    request.onupgradeneeded = function (event) { const db = event.target.result }
    request.onsuccess = function (event) {
      const db = event.target.result;
      const tx = db.transaction(CFG_DB_STORE_OPERATIONS,"readonly")
      const store = tx.objectStore(CFG_DB_STORE_OPERATIONS)
      const allReq = store.getAll()
      allReq.onsuccess = function () { 
        console.log("All records: ",allReq.result)
        var operations = allReq.result
        CFG_RANGE_YEAR = dataPeriodRange(operations)
        CFG_CURRENT_YEAR = Number(Object.keys(CFG_RANGE_YEAR)[0])
        for (var i = 1; i <= operations.length-1; i++) {// Builds cubes  
          month = Number(operations[i]['date'].substring(3, 5)) - 1
          year = Number(operations[i]['date'].substring(6, 10))
          year = CFG_RANGE_YEAR[year]         
          categ = operations[i]['catégorie']
          expns = operations[i]['débit']
          if (expns != '') {
            CFG_OPERATION_CUBE[year][month][CFG_CATEGORY_MAP[categ]] += Math.round(expns)}}
        document.getElementById("currentYear").innerHTML = CFG_CURRENT_YEAR    
        plotSankey(CFG_CURRENT_MONTH)}
      allReq.onerror = function () { console.error("Error reading all records")}}}

function cubifyIncomes (ops) {
  for (var i = 1; i < ops.length; i++) {// Builds cubes    
    op = ops[i].split(";")    
    month = Number(op[0].substring(3, 5)) - 1    
    incme = op[5]        
    if (incme != '') { // incomes per month array
      CFG_INCOMES_PER_MONTH[month] += Math.round(incme)}}
}

function cubifyData () {
  clearData()  
  cubifyOperations()}  //TODO: cubifyAssets(assets);cubifyIncomes(ops)  

function objectifyData (data) {
  // transform raw csv data into indexedDB ready to insert objects
  const lines = data.split("\n")
  const headers = lines[0].split(";")  
  var data = lines.slice(1).map(line => {
    const values = line.split(";");
    return headers.reduce((obj, header, i) => { 
      obj[header] = values[i]; return obj },{})})
  return data }

function buildEmptyHomePage() {  
  document.getElementById("empty-page").innerHTML = window.emptyPage
  let uploader2 = document.getElementById('uploader2')
  let csvInput2 = document.getElementById('csvInput2')

  uploader2.addEventListener("click", function () { 
    (document.getElementById('csvInput2')).click()})  
    
  // Adds function on hidden input field related to the middle menu    
  csvInput2.addEventListener("change", () => {      
    const file = csvInput2.files[0]
    if (file) { 
      const reader = new FileReader(); 
      var lines = ''
      reader.onload = function (event) { 
        lines = objectifyData(event.target.result)
        addDBRows(lines,CFG_DB_STORE_OPERATIONS)
        cubifyOperations(lines)
        document.getElementById("empty-page").style.display="none"
        document.getElementById("sankey-chart").style.display="flex"}
      reader.readAsText(file)}})}

function initData () {  
  const request = indexedDB.open(CFG_DB_NAME, 2)
  request.onupgradeneeded = function (event) {
    const db = event.target.result
    const stores = [CFG_DB_STORE_ASSETS,CFG_DB_STORE_ASSETS_CUBE,CFG_DB_STORE_OPERATIONS_CUBE,CFG_DB_STORE_OPERATIONS]
    stores.forEach((store) => {
      if(!db.objectStoreNames.contains(store)) {
      db.createObjectStore(store, {autoIncrement: true})}})}  

  request.onsuccess = function (event) {
    const db = event.target.result;
    const txAssets = db.transaction(CFG_DB_STORE_ASSETS,"readwrite")
    const txAssetsCube = db.transaction(CFG_DB_STORE_ASSETS_CUBE,"readwrite")    
    const txOperations = db.transaction(CFG_DB_STORE_OPERATIONS,"readwrite")
    const txOperationsCube = db.transaction(CFG_DB_STORE_ASSETS_CUBE,"readwrite")
    const storeAssets = txAssets.objectStore(CFG_DB_STORE_ASSETS)
    const storeOperations = txOperations.objectStore(CFG_DB_STORE_OPERATIONS)
    const countOperationRequest = storeOperations.count()
    const countAssetsRequest = storeAssets.count()
    countOperationRequest.onsuccess = () => {    
      if(countOperationRequest.result === 0){ buildEmptyHomePage()}
      else {        
        document.getElementById("empty-page").style.display="none"
        document.getElementById("sankey-chart").style.display="flex" 
        cubifyData()}}}}

function addDBRows(rows,os){
  const request = indexedDB.open(CFG_DB_NAME)  
  request.onsuccess = function(event) {
    db = event.target.result
    const tx = db.transaction(os,"readwrite")
    const store = tx.objectStore(os)
    rows.forEach(function(row) {
      const addreq = store.add(row)
      addreq.onsuccess = function () { console.log("Added:",row)}
      addreq.onerror = function (e) {
        console.log("Failed to add:", row, e.target.error)}})
    tx.oncomplete = function(){console.log("All rows processed.")}
    tx.onerror = function (){ console.log("Transaction failed.")}
  request.onerror = function(){console.log("Could not open DB.")}}}

function addAllEventListener () {
  var item1 = document.getElementById('letf-menu-item1')
  var item2 = document.getElementById('letf-menu-item2')
  var item7 = document.getElementById('left-menu-item7')
  var csvInput1 = document.getElementById('csvInput1') 
  
  if (item1) { // Adds functions on left side menu first element
    item1.addEventListener("click", function () {
      document.getElementById("sankey-chart").style.display = "flex"
      document.getElementById("linear-chart").style.display = "none"
      document.getElementById("allocation-chart").style.display = "none"
      item1.classList.add("left-menu-item-selected")
      item2.classList.remove("left-menu-item-selected")})}    
  
  if (item2) {// Adds functions on left side menu secund element  
    item2.addEventListener("click", function () {
      document.getElementById("sankey-chart").style.display = "none"
      document.getElementById("linear-chart").style.display = "flex"
      document.getElementById("allocation-chart").style.display = "flex"
      item2.classList.add("left-menu-item-selected")
      item1.classList.remove("left-menu-item-selected")})}
  
  if (item7) {// Adds functions on left side menu 7th item
    item7.addEventListener("click", function () { 
      csvInput1.click() })}
  
  if (csvInput1) { // Adds function on hidden input field related to the left menu 7th item
    csvInput1.addEventListener("change", () => {      
      const file = csvInput1.files[0]
      if (file) { 
        const reader = new FileReader(); 
        var lines = ''
        reader.onload = function (event) { 
          lines = objectifyData(event.target.result)          
          addDBOperations(lines,CFG_DB_STORE_OPERATIONS)}
        reader.readAsText(file)}})} 

  // Adds function on month buttons  
  var divs = document.querySelectorAll('.month-year');
  divs.forEach((div, index) => {
    div.addEventListener('click', function (event) {
      CFG_CURRENT_MONTH = index
      let currentMonth = event.target.innerHTML
      let sankeyData = buildSankeyData(CFG_OPERATION_CUBE,CFG_INCOMES_PER_MONTH[index],index)
      document.getElementById("currentMonth").innerHTML=currentMonth.substring(0,4)+"."      
      EXPENSES_CHART.data.datasets[0].data = sankeyData.data;
      EXPENSES_CHART.data.datasets[0].labels = sankeyData.labels;
      EXPENSES_CHART.update()})})
        
  // Adds function on years dropdown list
  var li = document.querySelectorAll('.year-list-item');
  li.forEach((li, index) => {
    li.addEventListener('click', function(event) {      
      CFG_CURRENT_YEAR = parseInt(event.target.innerHTML)
      document.getElementById("currentYear").innerHTML=CFG_CURRENT_YEAR
      cubifyData()
      let sankeyData = buildSankeyData(CFG_OPERATION_CUBE,CFG_INCOMES_PER_MONTH[index],index)
      EXPENSES_CHART.data.datasets[0].data = sankeyData.data;
      EXPENSES_CHART.data.datasets[0].labels = sankeyData.labels;
      EXPENSES_CHART.update()})})}