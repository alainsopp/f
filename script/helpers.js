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
        default: onsole.log("Error: no data for this year.");assets = []
    }
    return assets
}

function buildLinearData (cube) {    
    var init = 0;
    data = [0,0,0,0,0,0,0,0,0,0,0,0]
    for (i=0;i<cube.length;i++) {
    data[i] = cube[i].reduce(
            (acc, cur) => acc + cur, init,);
    }
    return data
}