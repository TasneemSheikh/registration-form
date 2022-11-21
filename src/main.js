import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'
import HelloWorld from './components/HelloWorld.vue'
import LoginPage from './components/LoginPage.vue'



Vue.config.productionTip = false
Vue.use(createRouter)

const router = new createRouter({
    routes: [{ path: '/HelloWorld', component: LoginPage },
        { path: '/', component: HelloWorld }
    ]


});


new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')