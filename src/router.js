
import { createWebHistory, createRouter } from 'vue-router'

const Notfound = () =>
    import(/*webpackChunkName: "Notfound"*/ "@/components/Notfound");
const Helloworld = () =>
    import(/*webpackChunkName: "Helloworld"*/ "@/components/HelloWorld");

const routes = [
    { path: '/', name: 'Helloworld', component: Helloworld },
    { path: '/:catchAll(.*)', name: 'Notfound', component: Notfound }

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes

})

export default router