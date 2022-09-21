import PokemonApi from "@/api/PokemonApi"
export const loadArticles = async ({commit}) =>{
    commit('clearArticles' )
    //Obtemos la data de firebase
    const {data} = await PokemonApi.get('/')
    const {results} = data
    if(! results){
        commit('setArticles', [] )
        return
    }
    const articles = []
  
    for (let id of Object.keys(results)){
       
        let PokemonID =  Number (id) +1 
        articles.push({
            PokemonID,
            ...results[id]
        })
    }
    commit('setArticles', articles )
}
