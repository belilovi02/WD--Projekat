const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const detailsCloseBtn = document.getElementById('details-close-btn');

//event listeners

searchBtn.addEventListener('click', getMealList);

function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food`, {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            /*let html = "";
             if (data.Food) {
                 data.Food.forEach(food => {
                     html += `
                         <div class="meal-item" data-id="${food.id}" >
                             <div class="meal-img">
                                 <img src="${food.imageUrl}" alt="food">
                             </div>
                             <div class="meal-name">
                                 <h3>${food.name}</h3>
                                 <a href="#" class="take-btn">Detalji</a>
                             </div>
                         </div>
                     `;
                 });  
             }  */
            // mealList.innerHTML = html;
            console.log(data);
        });
}
