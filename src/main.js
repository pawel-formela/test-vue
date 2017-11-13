import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        console.log(to, 'to');
        console.log(from, 'from');
        console.log(savedPosition, 'savedPosition');

        if (savedPosition) {
            return savedPosition
        }


        if (to.hash) {
            return {selector: to.hash}
        }
        return {x: 0, y: 0}
    }
});

router.beforeEach((to, from, next) => {
    console.log('globalBefoe Each')
    next();

});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
