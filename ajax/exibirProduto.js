let btn = document.getElementById('btn');
let table = document.getElementById('table');

btn.addEventListener('click', function(){

    let id = document.getElementById('id').value;
    
    fetch('http://localhost:8080/api/produto/'+id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
       return response.json()
    })
    .then(response => {
        let produto = document.getElementById('produto');
        let quantidade = document.getElementById('quantidade');
        let valor = document.getElementById('valor');

        produto.innerHTML = response.nome;
        quantidade.innerHTML = response.quantidade;
        valor.innerHTML = response.valor;
    })
})