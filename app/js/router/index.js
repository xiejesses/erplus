import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import AboutUs from "../about-us/index.vue"
import Team from "../team/index.vue"
import Culture from "../culture/index.vue"

import "../../css/reset.scss"

Vue.use(Router)

export default new Router({
    // mode: 'history', //去掉 #
    // history: true,   //去掉 #
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/about-us",
            name: "",
            component: AboutUs,
        },
        {
            path: "/team",
            name: "",
            component: Team,
        },
        {
            path: "/culture",
            name: "",
            component: Culture,
        },
    ],
})
