const url= "https://viacep.com.br/ws/88132857/json/"

/*1.1. Faça uma requisição com fetch e mostre o objeto completo do CEP no
console
1.2. Busque um CEP e exiba somente o logradouro na tela
1.3. Busque dois CEPs em sequência usando then e mostre os dois resultados
junto*/

//EXERCICIO- 1 = 1.1. Faça uma requisição com fetch e mostre o objeto completo do CEP no
//console:
async function exercicioUm(){
    const resposta = await fetch("https://viacep.com.br/ws/88132857/json/")
    const dados = await resposta.json()
    console.log("exercicio 1 " ,  dados)
}

exercicioUm()



/* EXERCICIO 2 = 1.2. Busque um CEP e exiba somente o logradouro na tela:*/
async function exercicioDois(){ 
    const resposta = await fetch("https://viacep.com.br/ws/88132857/json/")
    const dados = await resposta.json()
    console.log("exercicio 2 " ,  dados.logradouro)
}

exercicioDois() 


/* EXERCICIO 3 - 1.3. Busque dois CEPs em sequência usando then e mostre os dois resultados
junto:*/

url1 = "https://viacep.com.br/ws/88132857/json/"
url2 = "https://viacep.com.br/ws/8810639/json/"
    
fetch(url1)
.then(resposta => resposta.json())
.then(primeiraBusca => {
    return fetch(url2)
    .then(resposta2 => resposta2.json())
    .then(segundaBusca=>{
        console.log("exercicio 3 -" , primeiraBusca,segundaBusca)
    })
})

/* 1. fetch().then().then().catch()
API: "https://viacep.com.br/ws/88132857/json/"
1.1. Trate o erro com catch e exiba uma mensagem se o CEP não existir
1.2. Busque um CEP e mostre CEP, rua, bairro, cidade e estado em uma lista
HTML
1.3. Use then para concatenar CEP e cidade em uma única string e mostre na
tela */

// EXERCICIO 4 Trate o erro com catch e exiba uma mensagem se o CEP não existir:

const url_ex4 = "https://viacep.com.br/ws/88132857/json/"
 
fetch(url_ex4)
.then(res => {
    if(!res.ok){
        throw new erro("Erro de rede!")
    }
   return res.json()
})

.then(dados => {
    if(dados.erro){
        throw new erro("os não carregaram")
    }
    console.log(dados)
})
.catch(erro => console.log("ocorreu um erro: " , erro.message))
 /*n EXERCICIO 5 - 1.2. Busque um CEP e mostre CEP, rua, bairro, cidade e estado em uma lista
HTML:*/
async function exercicio5(){ 
    const resposta = await fetch("https://viacep.com.br/ws/88132857/json/")
    const dados = await resposta.json()
    console.log("exercicio 5 " ,  dados)


const div = document.getElementById("exercicios")
const ul = document.getElementById("ul")
 const cep = document.getElementById("cep")
 const rua = document.getElementById("rua")
 const bairro = document.getElementById("bairro")
 const cidade = document.getElementById("cidade")
 const estado = document.getElementById("estado")

cep.textContent = dados.cep
rua.textContent = dados.logradouro
bairro.textContent = dados.bairro
cidade.textContent = dados.estado

ul.append(cep, rua, bairro, cidade, estado)
div.append(ul)
}

exercicio5() 








