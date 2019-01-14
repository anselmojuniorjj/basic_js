var formulario = document.querySelector("#formUsuario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    
        if(verificaDados()){

            let dados = {
                nome: formulario.nome.value,
                quantidade: formulario.quantidade.value,
                valor: formulario.valor.value
            };
        
            fetch('http://localhost:8080/api/produto', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(dados) 
                
            })
            .then(response => {
                return response.json()
            })
            .then(response => {
                document.getElementById('msgSuccess').innerHTML = 'cadastrado com sucesso';
            });
            formulario.nome.value = '';
            formulario.quantidade.value = '';
            formulario.valor.value = '';
        }else{
            document.getElementById('msgErro4').innerHTML = 'Algo deu errado';
        }  
})

function verificaDados() {
    
    if(formulario.nome.value == '' || formulario.quantidade.value == ''
        || formulario.valor.value == '') 
        document.getElementById('msgErro1').innerHTML = 'Informe todos os campos';        
    if(isNaN(formulario.quantidade.value)) 
        document.getElementById('msgErro2').innerHTML = 'O valor da quantidade deve ser numérico';
    if(isNaN(formulario.valor.value))
        document.getElementById('msgErro3').innerHTML = 'O valor R$ deve ser numérico';

        return true;
}