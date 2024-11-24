let productsArray = [];  

function collectData() {
    const productName = document.getElementById('productName').value;
    const price = document.getElementById('price').value;
    const select = document.getElementById('select').value;
    const URL = document.getElementById('URL').value;
    return { productName, price, select, URL };
}

function generateHTML(data, index) {
    const newHTML = `
    <tr class="table-warning" data-index="${index}">
        <td>${data.productName}</td>
        <td>${data.price}</td>
        <td>${data.select}</td>
        <td><img class="size" src="${data.URL}" /></td>
        <td><button class="btn btn-danger" onclick="removeProduct(${index})">Remove</button></td>
    </tr>`;
    return newHTML;
}

function renderHTML() {
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = '';  
    productsArray.forEach((product, index) => {
        const newHTML = generateHTML(product, index);
        productsContainer.innerHTML += newHTML;
    });
}

function clearForm() {
    const productsForm = document.getElementById('productsForm');
    productsForm.reset();
    const productName = document.getElementById('productName');
    productName.focus();
}

function addProductToTable(event) {
    event.preventDefault();

    const data = collectData();
    if (data.productName && data.price > 0 && data.select && data.URL) {
        productsArray.push(data); 
        renderHTML();  
        clearForm();
    }
}

function removeProduct(index) {
    productsArray.splice(index, 1); 
    renderHTML();  
}