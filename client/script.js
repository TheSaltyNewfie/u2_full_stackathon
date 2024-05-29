const datadiv = document.getElementById('api-results');

async function getData() {
    const response = await fetch('http://localhost:3000/');
    const data = await response.text();
    console.log(data);
    datadiv.innerHTML = data;
}

getData();