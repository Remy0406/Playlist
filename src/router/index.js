import { createRouter , createWebHistory } from "vue-router";
import Home from "../pages/Home.vue"
import About from"../pages/About.vue"


const routes =[{
    path:"/",
    component: Home,
    name: "Home",
},{
    path:"/about",
    component: About,
    name: "About",
}]


const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "active",
    scrollBehavior(to, from, savePosition) {
        if (to.hash) {
            return {
                selector: to,hash,
                behavior: 'smooth'
            };
        }
        return {x: 0, y:0 };
    },
    routes,
});

export default router;