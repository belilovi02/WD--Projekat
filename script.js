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
                    <p class="food-price">Cijena: ${food.price}KM</p>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever = "@getbootstrap" onclick="fillData(${food.id})">EDIT</button>
                </div>
            </div>`;
    });
    foodsRow.innerHTML = resultHtml;
}

const fillData = (foodID) => {

    const food = foods.find(food => food.id === foodID);
    const foodFormID1 = document.getElementById("food-id-1");
    const foodFormName1 = document.getElementById("food-name-1");
    const foodFormPrice1 = document.getElementById("food-price-1");
    const foodFormImageUrl1 = document.getElementById("food-imageUrl-1");

    foodFormID1.value = food.id;
    foodFormName1.value = food.name;
    foodFormPrice1.value = food.price;
    foodFormImageUrl1.value = food.imageUrl;

}

const putFood = () => {
    foodFormID1 = document.getElementById("food-id-1").value;
    foodFormName1 = document.getElementById("food-name-1").value;
    foodFormPrice1 = document.getElementById("food-price-1").value;
    foodFormImageUrl1 = document.getElementById("food-imageUrl-1").value;

    fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food`, {
            method: 'PUT',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify({
                id: foodFormID1,
                name: foodFormName1,
                price: foodFormPrice1,
                imageUrl: foodFormImageUrl1
            })
        })
        .then(res => {
            console.log(res);
        })
}