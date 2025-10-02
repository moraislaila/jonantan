//1. Consulta de CEP (ViaCEP)

const url = "https://viacep.com.br/ws/01001000/json/"

fetch(url) //busca a url
.then(res => res.json()) //converte os dados para obejto.
.then(data => console.log(`exercicio1:

   cep: ${data.cep}
   rua: ${data.logradouro} 
   cidade:${data.localidade}
   estado:${data.estado}`

))

//2.Previsão do tempo (Open-Meteo)
//try/catch: ele localiza o erro porem o código continua rodando.
async function previsao() {
   try{
      const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current_weather=true")
      const data = await res.json()

      console.log (` exercicio 2:

   temperatura: ${data.current_weather.temperature}
   velocidade do vento: ${data.current_weather.windspeed}
          `)
   }catch (erro){
      console.log("erro " + erro.menssage)
   }
   
}
previsao()

//3. Dados de Pokémon (PokeAPI)

async function listagem() {
   try{
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      const data = await res.json()
      console.log (`exercicio 3:
         nome: ${data.name}
         altura: ${data.height}
         `)
      
   }catch (erro){
      console.log("erro" + erro.menssage)
   }
}
listagem()

//4. Lista de Pokémons (PokeAPI)

async function pokemon() {
   try{
         const res = await fecht("https://pokeapi.co/api/v2/pokemon?limit=10")
         const data = await res.json()
         console.log(`exercicio 4:

            nome: ${data.name}`)
   }catch(erro){
      console.log("erro" + erro.menssage)
   }
}
pokemon()