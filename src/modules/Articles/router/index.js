export default {
    name : '',
    component: () => import(/* webpackChunkName: "auth" */ '@/modules/Articles/layouts/ArticlesLayout.vue'),
    children:[
        {
            path:'',
            name:'list-article',
            component: () => import(/* webpackChunkName: "login" */ '@/modules/Articles/view/PokemonCard.vue'),

        },
     
    ]

  

}