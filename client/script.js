const sportsEndpoint = 'http://127.0.0.1:3000/sports'
const clothesEndpoint = 'http://localhost:3000/clothes'
const equipmentEndpoint = 'http://localhost:3000/equipment'

const dropdown = document.getElementById('dropdown')
const clothingDiv = document.getElementById('content1')
const equipmentDiv = document.getElementById('content2')
const shoppingCart = document.getElementById('sidebar')

async function getItems(endpoint) {
    try {
        const resp = await axios.get(`${endpoint}`)
        console.log(resp.data)
        resp.data.clothes.forEach(item => {
            clothingDiv.innerHTML += `
                <p>${item.name}</p>
            `
        })
    } catch(error) {
        console.error(error)
    }
}

dropdown.onchange = async (e) => {
    await getItems(`${sportsEndpoint}/id/${dropdown.options[dropdown.selectedIndex].text.toLowerCase()}`)
}