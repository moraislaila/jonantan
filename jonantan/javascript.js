
/*const url = "https://viacep.com.br/ws/88161789/json/"

//-------------FETCH/THEN-buscar dados do CEP usando fetch().then().then().catch()

//fetch(url).then(resposta=>resposta.json()).then(dados =>{ console.log(dados.cep)})

//------------ASYNC/AWAIT - FETCH
async function buscarCEP(){
    try{
    const resposta = fetch(url)
    const dados = await (await resposta).json()
    console.log(resposta)

    darAlert()

}catch(erro){
    console.log(erro.message)
}
}
buscarCEP()

function darAlert(){
    alert("carregando os dados!")
}
    */

const resultado = document.getElementById("resultado")
const btnPesquisar = document.getElementById("pesquisar")

function criarEndereço(cep,rua, bairro, cidade,estado){
    //resultado innerHTML=""
    const container = document.createElement("div")
    const ul = document.createElement("ul")
    const el_cep = document.createElement("li")
    const el_rua = document.createElement("li")
    const el_bairro = document.createElement("li")
    const el_cidade = document.createElement("li")
    const el_estado = document.createElement("li")


    el_cep.textContent = "CEP " + cep
    el_rua.textContent = "CEP " + rua
    el_bairro.textContent = "CEP " + bairro
    el_cidade.textContent = "CEP "  + cidade
    el_estado.textContent = "CEP " + estado

    ul.append(el_cep, el_rua, el_bairro, el_cidade,el_estado)
    container.append(ul)
    resultado.append(container)
}

async function pesquisarCEP() {
    const dados = await resgatarDados()
    
    const cep = dados.cep
    const rua = dados.logradouro
    const bairro = dados.bairro
    const cidade = dados.localidade
    const estado = dados.estado

    criarEndereço(cep,rua, bairro, cidade,estado)

}

async function resgatarDados() {
    try {
        const respostaServidor = await fetch("https://viacep.com.br/ws/88132857/json/")

        if (!respostaServidor.ok) {
            console.log("falha ao tentar resgatar os dados do API do CEP")
            return null
        }


        const dados = await respostaServidor.json()
        return dados
    } catch (erro) {
        console.log(erro.message)
    }
}

