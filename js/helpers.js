<<<<<<< HEAD
// Return formated datadet for chart.js line chart generator
function buildLinearData (cube) {    
    var init = 0;
    data = Array(cube.length).fill(0);
    for ( i = 0; i < cube.length; i++ ) {
        data[i] = cube[i].reduce( (acc, cur) => acc + cur, init,)}
    return data}
=======
// Returns operation data for a specified year
function getOperations(year) {
    var operations = ''
    switch (year) {  
        case 2018 : operations = OPERATIONS18; break;
        case 2019 : operations = OPERATIONS19; break;
        case 2020 : operations = OPERATIONS20; break;
        case 2021 : operations = OPERATIONS21; break;
        case 2022 : operations = OPERATIONS22; break;
        case 2023 : operations = OPERATIONS23; break;
        case 2024 : operations = OPERATIONS24; break;
        case 2025 : operations = OPERATIONS25; break;
        case 2026 : operations = OPERATIONS26; break;
        default: console.log("Error: no data for this year.");operations=[]
    }
    return operations
}

// Returns assets data for a specific year
function getAssets(year) {
    var assets = ''
    switch (year) {
        case 2018 : assets = ASSETS18; break;
        case 2019 : assets = ASSETS19; break;
        case 2020 : assets = ASSETS20; break;
        case 2021 : assets = ASSETS21; break;
        case 2022 : assets = ASSETS22; break;
        case 2023 : assets = ASSETS23; break;
        case 2024 : assets = ASSETS24; break;
        case 2025 : assets = ASSETS25; break;
        case 2026 : assets = ASSETS25; break;
        default: onsole.log("Error: no data for this year.");assets = []
    }
    return assets
}
// Return formated datadet for chart.js line chart generator
function buildLinearData (cube) {    
    var init = 0;
    data = [0,0,0,0,0,0,0,0,0,0,0,0]
    for ( i = 0; i < cube.length; i++ ) {
    data[i] = cube[i].reduce(
            (acc, cur) => acc + cur, init,);
    }
    return data
}
>>>>>>> c99c11a94ac632767a4796129a76b348ff3998dc

// Return formated datadet for chart.js sankey chart generator
function buildSankeyData(cube,incomes,month) {
    var data = [
<<<<<<< HEAD
        { from: 'Incomes',to: 'Budget', flow : incomes},
        { from: 'Budget', to: 'Alimentation & restaurants', flow: cube[CFG_RANGE_YEAR[CFG_CURRENT_YEAR]][month][0]},
        { from: 'Budget', to: 'Achats & shopping', flow: cube[CFG_RANGE_YEAR[CFG_CURRENT_YEAR]][month][1]},
        { from: 'Budget', to: 'Loisirs',  flow: cube[CFG_RANGE_YEAR[CFG_CURRENT_YEAR]][month][2]}, 
        { from: 'Budget', to: 'Logement & charges', flow: cube[CFG_RANGE_YEAR[CFG_CURRENT_YEAR]][month][3]}, 
        { from: 'Budget', to: 'Sante', flow: cube[CFG_RANGE_YEAR[CFG_CURRENT_YEAR]][month][4]}, 
        { from: 'Budget', to: 'Don', flow: cube[CFG_RANGE_YEAR[CFG_CURRENT_YEAR]][month][5]}, 
        { from: 'Budget', to: 'Impôts, taxes & frais', flow: cube[CFG_RANGE_YEAR[CFG_CURRENT_YEAR]][month][6]},
        { from: 'Budget', to: 'Transports', flow: cube[CFG_RANGE_YEAR[CFG_CURRENT_YEAR]][month][7]},
        { from: 'Budget', to: 'Voyages', flow: cube[CFG_RANGE_YEAR[CFG_CURRENT_YEAR]][month][8]},
        { from: 'Budget', to: 'Epargne & placements', flow: cube[CFG_RANGE_YEAR[CFG_CURRENT_YEAR]][month][9]},
        { from: 'Budget', to: 'Note de frais', flow: cube[CFG_RANGE_YEAR[CFG_CURRENT_YEAR]][month][10] }];    
    var labels = {}
    data.forEach(d => labels[d.from] = d.from +": "+ d.flow +" €" )
    data.forEach(d => labels[d.to] = d.to +": "+ d.flow +" €") 
    return {data,labels}}
=======
      { from: 'Incomes',to: 'Budget', flow : incomes},
      { from: 'Budget', to: 'Alimentation & restaurants', flow: cube[month][0]},
      { from: 'Budget', to: 'Achats & shopping', flow: cube[month][1]},
      { from: 'Budget', to: 'Loisirs',  flow: cube[month][2]}, 
      { from: 'Budget', to: 'Logement & charges', flow: cube[month][3]}, 
      { from: 'Budget', to: 'Sante', flow: cube[month][4]}, 
      { from: 'Budget', to: 'Don', flow: cube[month][5]}, 
      { from: 'Budget', to: 'Impôts, taxes & frais', flow: cube[month][6]},
      { from: 'Budget', to: 'Transports', flow: cube[month][7]},
      { from: 'Budget', to: 'Voyages', flow: cube[month][8]},
      { from: 'Budget', to: 'Epargne & placements', flow: cube[month][9]},
      { from: 'Budget', to: 'Note de frais', flow: cube[month][10] }
    ];
    
    var labels = {}
    data.forEach(d =>
      labels[d.from] = d.from +": "+ d.flow +" €" 
    )
    data.forEach(d =>
      labels[d.to] = d.to +": "+ d.flow +" €" 
    ) 
    return {data,labels}
}
>>>>>>> c99c11a94ac632767a4796129a76b348ff3998dc
