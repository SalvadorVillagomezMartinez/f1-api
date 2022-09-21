export default {
    name : '',
    component: () => import(/* webpackChunkName: "auth" */ '@/modules/Exits/Layouts/ExitsLayout.vue'),
    //component: () => import(/* webpackChunkName: "login" */ '@/modules/auth/views/Login.vue'),
    children:[
        {
            path:'',
            name:'exits',
            component: () => import(/* webpackChunkName: "login" */ '@/modules/Exits/views/Exits.vue'),

        },
        {
            path:'/seguimiento',
            name:'seguimiento',
            component: () => import(/* webpackChunkName: "seguimeinto" */ '@/modules/Exits/views/Following.vue'),

        }
    ]

}