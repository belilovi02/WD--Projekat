let foods = [];
fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food`)
    .then(res => {
        return res.json();
    })
    .then(data => {
        foods = data;
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
                    <div class="d-flex justify-content-between">
                        <p class="food-price">Cijena: ${food.price}KM</p>
                        <button type="button" onclick="fillEditData(${food.id})" class="btn btn-primary" 
                        data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Edit</button>
                    </div>
                </div>
            </div>`;
    });
    foodsRow.innerHTML = resultHtml;
}

const fillEditData = (foodId) => {
    const food = foods.find(food => food.id === foodId);
    const foodFormId = document.getElementById('food-id-1');
    const foodFormName = document.getElementById('food-name-1');
    const foodFormImage = document.getElementById('food-imageUrl-1');
    const foodFormPrice = document.getElementById('food-price-1');

    foodFormId.value = food.id;
    foodFormName.value = food.name;
    foodFormImage.value = food.imageUrl;
    foodFormPrice.value = food.price;
}

const editFood = () => {
    const foodFormId = document.getElementById('food-id-1').value;
    const foodFormName = document.getElementById('food-name-1').value;
    const foodFormImage = document.getElementById('food-imageUrl-1').value;
    const foodFormPrice = document.getElementById('food-price-1').value;

    fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food`, {
            method: 'PUT',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify({
                id: foodFormId,
                name: foodFormName,
                imageUrl: foodFormImage,
                price: foodFormPrice
            })
        })
        .then(response => {
            console.log(response);
        })
}
const addFood = () => {
    const foodFormId = document.getElementById('food-id').value;
    const foodFormName = document.getElementById('food-name').value;
    const foodFormImage = document.getElementById('food-imageUrl').value;
    const foodFormPrice = document.getElementById('food-price').value;

    fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food`, {
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify({
                id: foodFormId,
                name: foodFormName,
                imageUrl: foodFormImage,
                price: foodFormPrice
            })
        })
        .then(response => {
            console.log(response);
        })
}

const deleteFood = () => {
    const id = document.getElementById('food-id-d').value;
    fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            console.log(response);
        })
}