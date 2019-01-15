window.onload = function(){

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
        response.forEach(function(element) {

            let linha = document.createElement('tr');

            linha.innerHTML = '<th>'+element.nome+'</th>'+
            ' <th> '+element.quantidade+' </th>'+
            '<th> '+element.valor+' </th>'+
            '<th id="'+element.id+'"><a href="#"> X </a></th>'

            table.appendChild(linha);

            let del = document.getElementById(''+element.id+'');
            
            del.addEventListener('click',event => {
                event.preventDefault();
                
                fetch('http://localhost:8080/api/deletar/'+element.id, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json' 
                    },
                });
                linha.innerHTML = '';
                let msg = document.getElementById('msg');
                msg.innerHTML = 'Produto '+element.nome+' excluído com sucesso';
            })

        })
        
    })
    
};

