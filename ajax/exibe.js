let btn = document.getElementById('btn');
let table = document.getElementById('table');

btn.addEventListener('click', function(){

    table.innerHTML = '';

    fetch('http://localhost:8080/api/produtos', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
    })
    .then(response => {
        // console.log(response);
        return response.json();
    })
    .then(response => {
        response.forEach(element => {

            let linha = document.createElement('tr');

            linha.innerHTML = '<th>'+element.nome+'</th>'+
            ' <th> '+element.quantidade+' </th>'+
            '<th> '+element.valor+' </th>'

            table.appendChild(linha);

        });
    })
})