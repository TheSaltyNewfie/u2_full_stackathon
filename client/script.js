const datadiv = document.getElementById('api-results');

async function getData() {
    const response = await fetch('http://localhost:3000/');
    const data = await response.text();
    console.log(data);
    datadiv.innerHTML = data;
}

getData();

let button = document.querySelector("#searchButton")
let sportName = document.querySelector("#sportName")
let sportImage = document.querySelector("#sportImage")
let sportItem = document.querySelector("#sportItem")
let sportDisplay = document.querySelector("#imageArray")

button.addEventListener('click', async (e)=> {
    e.preventDefault()
    sportName.innerHTML = ``
    let input = document.querySelector("#inputBar").value
    if (input!== ``) {
        let response = await axios.get(
            'http://localhost:3000/${input}'
        )
        console.log(response.data)}})