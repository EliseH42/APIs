const getResidentsBtn = document.querySelector('#get-residents')

const baseURL = "https://swapi.dev/api/"


function getResidents(){
    axios
    .get(baseURL+"planets/?search=alderaan")
    .then((response) => {
    
        const residents = response.data.results[0].residents
        console.log(residents)
        
    });

};

getResidentsBtn.addEventListener('click',getResidents)
