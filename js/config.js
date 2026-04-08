<<<<<<< HEAD
const CFG_MONTH_LIST_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const CFG_MONTH_LIST_LONG = ['January','Febuary','March','April','May','June','Jully','August','September','October','November','December']
const CFG_DB_NAME = "financialy"
const CFG_DB_STORE_ASSETS = "assets"
const CFG_DB_STORE_ASSETS_CUBE = "AssetsCube"
const CFG_DB_STORE_OPERATIONS_CUBE = "OperationsCube"
const CFG_DB_STORE_OPERATIONS = "operations"

var CFG_THEME = 1
var CFG_RANGE_YEAR = []
var CFG_NB_YEARS = 1
var CFG_CURRENT_YEAR = new Date().getFullYear()
var CFG_CURRENT_MONTH = new Date().getMonth()
=======

var CFG_CURRENT_YEAR = 2023
var CFG_CURRENT_MONTH = 1
>>>>>>> c99c11a94ac632767a4796129a76b348ff3998dc
var PATRIMONY_CHART = ''
var EXPENSES_CHART = ''
var CFG_CATEGORY_MAP = {
  'Alimentation & restaurants': 0,
  'Achats & shopping': 1,
  'Loisirs': 2,
  'Logement & charges': 3,
  'Sante': 4,
  'Don': 5,
  'Impôts, taxes & frais': 6,
  'Transports': 7,
  'Voyages': 8,
  'Epargne & placements': 9,
<<<<<<< HEAD
  'Note de frais': 10 }
=======
  'Note de frais': 10,
}

var CFG_ASSET_CATEGORY_MAP = {  
  'Cryptos': 0,
  'Actions & Fonds': 1 
}
>>>>>>> c99c11a94ac632767a4796129a76b348ff3998dc

var CFG_INCOME_CATEGORY_MAP = {
  'Salaire':0,
  'Remboursement':1,
  'Titres restaurant':2,
  'Don':3,
<<<<<<< HEAD
  'Virement':4 }

var CFG_ASSET_CATEGORY_MAP = { 
  'Cryptos': 0, 
  'Actions & Fonds': 1 }
  
var CFG_NB_OP_CATEGORIES = Object.keys(CFG_CATEGORY_MAP).length
var CFG_NB_AS_CATEGORIES = Object.keys(CFG_ASSET_CATEGORY_MAP).length
var CFG_NB_INC_CATEGORIES = Object.keys(CFG_INCOME_CATEGORY_MAP).length
var CFG_INCOMES_PER_MONTH = Array(CFG_NB_YEARS*12).fill(0)
var CFG_ASSETS_CUBE = Array(CFG_NB_YEARS).fill(Array(CFG_NB_YEARS*12).fill(Array(CFG_NB_AS_CATEGORIES).fill(0))) 

var CFG_OPERATION_CUBE = 
Array.from({ length: CFG_NB_YEARS }, () => // Years
  Array.from({ length: 12 }, () =>  // Months
    Array.from({ length: CFG_NB_OP_CATEGORIES }, () => 0))) // Categories
=======
  'Virement':4
}

// Martix of month (Y axis) by Categories (X axis)
var CFG_OPERATION_CUBE = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

// Matrix of month (Y axis) by asset categories (X axis)
var CFG_ASSETS_CUBE = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0]
]

// Table of incomes per month
var CFG_INCOMES_PER_MONTH = [0,0,0,0,0,0,0,0,0,0,0,0]
>>>>>>> c99c11a94ac632767a4796129a76b348ff3998dc
