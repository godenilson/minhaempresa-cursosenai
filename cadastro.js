const cep = document.getElementById("cep");

cep.addEventListener("blur", buscarCEP);

function buscarCEP(){

    const valor = cep.value.replace(/\D/g,"");

    if(valor.length != 8){

        alert("CEP inválido.");
        return;

    }

    fetch(`https://viacep.com.br/ws/${valor}/json/`)

    .then(resposta => resposta.json())

    .then(dados =>{

        if(dados.erro){

            alert("CEP não encontrado.");
            return;

        }

        document.getElementById("rua").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;

    })

    .catch(() =>{

        alert("Erro ao consultar a API.");

    });

}