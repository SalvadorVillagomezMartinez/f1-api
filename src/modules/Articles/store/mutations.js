export const setArticles = ( state, articles ) => {
   
    state.articles = [ ...state.articles, ...articles ]
    state.isLoading = false
}
export const clearArticles = ( state ) => {
    state.articles = []
}