const sportsEndpoint = 'http://127.0.0.1:3000/sports'
const clothesEndpoint = 'http://localhost:3000/clothes'
const equipmentEndpoint = 'http://localhost:3000/equipment'

const dropdown = document.getElementById('dropdown')
const clothingDiv = document.getElementById('content1')
const equipmentDiv = document.getElementById('content2')
const shoppingCart = document.getElementById('sidebar')

async function getItems(endpoint) {
    while(clothingDiv.firstChild) {
        clothingDiv.firstChild.remove()
    }
    try {
        const resp = await axios.get(`${endpoint}`)
        console.log(resp.data)
        resp.data.clothes.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        const itemHTML = `
            <img src="${item.image}" alt="${item.item}" width='100'>
            <p>${item.item}</p>
            <p>$${item.price}</p>
        `;
        itemDiv.innerHTML = itemHTML;
        clothingDiv.appendChild(itemDiv);
    });
    } catch(error) {
        console.log(error)
    }
}

async function getEquipment(endpoint) {
    while(equipmentDiv.firstChild) {
        equipmentDiv.firstChild.remove()
    }
    try {
        const resp = await axios.get(`${endpoint}`)
        console.log(resp.data)

        resp.data.items.forEach(item => {
            const equipDiv = document.createElement('div');
            equipmentDiv.classList.add('item');
            const equipHTML = `
                <img src="${item.image}" alt="${item.item}" width='100'>
                <p>${item.item}</p>
                <p>$${item.price}</p>
            `;
            equipDiv.innerHTML = equipHTML;
            equipmentDiv.appendChild(equipDiv);
        });
    } catch(error) {
        console.log(error)
    }
}

dropdown.onchange = async (e) => {
    const selectedValue = dropdown.value;
    const [equipmentResponse, itemsResponse] = await Promise.all([
        getEquipment(`${sportsEndpoint}/id/${selectedValue}`),
        getItems(`${sportsEndpoint}/id/${selectedValue}`)
    ])}