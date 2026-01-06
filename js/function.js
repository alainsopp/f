function clearData(){  
  CFG_OPERATION_CUBE = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ] 
  CFG_ASSETS_CUBE = [
    [0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]
  ]
  CFG_INCOMES_PER_MONTH = [0,0,0,0,0,0,0,0,0,0,0,0]
}

function cubifyData(){  
  clearData()
  let ops = (getOperations(CFG_CURRENT_YEAR)).split("\n")
  let assets = (getAssets(CFG_CURRENT_YEAR)).split("\n")  
  for (var i = 1; i < assets.length; i++){// Groups up assets by category for each month
    asset = assets[i].split(";")
    month = Number(asset[0].substring(3, 5)) - 1
    categ = asset[1]
    amount = asset[5]
    CFG_ASSETS_CUBE[month][CFG_ASSET_CATEGORY_MAP[categ]] += Math.round(amount)  }  
  for (var i = 1; i < ops.length; i++){// Builds cubes
    op = ops[i].split(";")
    month = Number(op[0].substring(3, 5)) - 1
    categ = op[1]
    expns = op[4]
    incme = op[5]    
    if (expns != '') { // expenses by category
      CFG_OPERATION_CUBE[month][CFG_CATEGORY_MAP[categ]] += Math.round(expns)}    
    if (incme != '') { // incomes per month array
      CFG_INCOMES_PER_MONTH[month] += Math.round(incme)}}
}