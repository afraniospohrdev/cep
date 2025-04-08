//1. Ouvir o evento de quando o usuario sair do campo do CEP
document.getElementById("cep").addEventListener("blur", (evento)=> {
    const elemento = evento.target;
    const cepInformado = elemento.value;

    //2. Validar CEP
    if(!(cepInformado.length === 8))
        return;
    
    //3. Fazer busca no ViaCEP
    //3.1 Promessa de que o Fetch vai buscar esse recurso
fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
    .then(response => response.json())
    .then(data => {
        //3.2 Processamento da pagina
        if(!data.erro){
            document.getElementById('logradouro').value = data.logradouro;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('estado').value = data.uf;
        }else{
            alert("CEP nao encontrado.")
        }
    })
    .catch(error => console.error("erro ao buscar o CEP: ", error))

    localStorage.setItem("cep", cepInformado);
    localStorage.setItem("logradouro", logradouroInformado);
    localStorage.setItem("bairro", bairroInformado);
    localStorage.setItem("cidade", localidadeInformado);
    localStorage.setItem("estado", ufInformado);

    
})

document.addEventListener('DOMContentLoaded', () =>{
    const cepInformado = localStorage.getItem("cep");
    const logradouroInformado = localStorage.getItem("logradouro");
    const bairroInformado = localStorage.getItem("bairro");
    const cidadeInformado = localStorage.getItem("localidade");
    const estadoInformado = localStorage.getItem("uf");


})
