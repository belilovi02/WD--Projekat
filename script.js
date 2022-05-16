const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const detailsCloseBtn = document.getElementById('details-close-btn');

//event listeners

searchBtn.addEventListener('click', getMealList);

function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    console.log(searchInputTxt);
    fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Food')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}