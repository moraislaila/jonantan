const url = "http://viacep.com.br/ws/88132857/json/ "

//FETCH - THEN - THEN - CATCH
//fetch(url).then(resposta => resposta.json()) //PEGA A RESPOSTA E CONVERTE
//.then(dados => console.log(dados))// PEGA OS DADOS E USA
//.catch(erro => console.log(erro.message))//PÉGA UM ERRO SE HOUVER

//ASYNC/AWAIT - FETCH   
async function buscarCEP(){
    try{
        const resposta = fetch(url)
        const dados = await resposta.json()

        console.log(`
            cep: ${dados.cep}
            rua: ${dados.logradouro}
            cidade: ${dados.localidade}
            estado: ${dados.estado}`)
 }catch(erro){
    console.log(erro.message)
 }
}

buscarCEP()

//async function exercicioTres(){
    //const resposta = await fetch("https://viacep.com.br/ws/88132857/json/")
   // const resposta2 = await fetch("https://viacep.com.br/ws/8810639/json/")
    
  //  const dados = await resposta.json()
  //  const dados2 = await resposta2.json()

  //  console.log("exercicio 3", dados.logradouro)
//}

//exercicioTres()*/
