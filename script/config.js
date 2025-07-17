
var CFG_CURRENT_MONTH = 0
var CFG_CATEGORY_MAP = {
  'Alimentation & restaurants'  : 0,
  'Achats & shopping'           : 1,
  'Loisirs'                     : 2,
  'Logement & charges'          : 3,
  'Sante'                       : 4,
  'Don'                         : 5,
  'Impôts, taxes & frais'       : 6,
  'Transports'                  : 7,
  'Voyages'                     : 8,
  'Epargne & placements'        : 9,
  'Note de frais'               : 10,
}

// Martix of month (Y axis) by Categories (X axis)
var CFG_OPERATION_CUBE = [
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
]