{
    /* <div class="meal-details-content">
                        <h2 class="detail-title">Ime obroka</h2>
                        <p class="detail-price">5.5</p>
                        <img src="food.jpg" alt="food">
                    </div> */
}
fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        renderFoods(data);
    })

const renderFoods = (foods) => {
    const foodsRow = document.getElementById('foods-row');

    let resultHtml = '';

    foods.forEach(food => {
        resultHtml += `
            <div class="card food-item">
                <img src="${food.imageUrl}" class="card-img food-img" alt="...">
                <div class="card-body">
                    <h3 class="food-name">${food.name}</h3>
                    <p class="food-price">Price: ${food.price}KM</p>
                </div>
            </div>`;
    });

    foodsRow.innerHTML = resultHtml;
}